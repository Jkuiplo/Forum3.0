const Votes = require('../models/Votes');

function voteOnThread(req, res) {
	const { threadId, vote } = req.body;
	const userId = req.user.id;
	const parsedVote = parseInt(vote);

	if (![1, 0, -1].includes(parsedVote)) {
		return res.status(400).json({ message: 'Invalid vote value' });
	}

	Votes.findVote(userId, threadId, (err, existingVote) => {
		if (err) {
			console.error('Error checking existing vote:', err);
			return res.status(500).json({ message: 'Server error' });
		}

		if (parsedVote === 0) {
			// Если пользователь хочет снять голос, и он существовал — удаляем
			if (existingVote) {
				Votes.deleteVote(userId, threadId, (err) => {
					if (err) {
						console.error('Error deleting vote:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					Votes.getTotalVotes(threadId, (err, result) => {
						if (err) {
							console.error('Error fetching total votes:', err);
							return res.status(500).json({ message: 'Server error' });
						}

						const totalVotes = result[0]?.totalVotes || 0;
						return res.status(200).json({ message: 'Vote removed', totalVotes });
					});
				});
			} else {
				// Если не было голоса, просто возвращаем
				Votes.getTotalVotes(threadId, (err, result) => {
					if (err) {
						console.error('Error fetching total votes:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					const totalVotes = result[0]?.totalVotes || 0;
					return res.status(200).json({ message: 'No vote to remove', totalVotes });
				});
			}
		} else if (existingVote) {
			// Если голос был, обновляем на новый
			Votes.deleteVote(userId, threadId, (err) => {
				if (err) {
					console.error('Error deleting existing vote:', err);
					return res.status(500).json({ message: 'Server error' });
				}

				Votes.addVote(userId, threadId, parsedVote, (err, voteId) => {
					if (err) {
						console.error('Error adding new vote:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					Votes.getTotalVotes(threadId, (err, result) => {
						if (err) {
							console.error('Error fetching total votes:', err);
							return res.status(500).json({ message: 'Server error' });
						}

						const totalVotes = result[0]?.totalVotes || 0;
						return res.status(201).json({ message: 'Vote updated', voteId, totalVotes });
					});
				});
			});
		} else {
			// Если не было голоса — добавляем
			Votes.addVote(userId, threadId, parsedVote, (err, voteId) => {
				if (err) {
					console.error('Error adding vote:', err);
					return res.status(500).json({ message: 'Server error' });
				}

				Votes.getTotalVotes(threadId, (err, result) => {
					if (err) {
						console.error('Error fetching total votes:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					const totalVotes = result[0]?.totalVotes || 0;
					return res.status(201).json({ message: 'Vote added', voteId, totalVotes });
				});
			});
		}
	});
}


function voteOnComment(req, res) {
	const { commentId, vote } = req.body;
	const userId = req.user.id;

	if (![1, -1].includes(parseInt(vote))) {
		return res.status(400).json({ message: 'Invalid vote value' });
	}

	// Проверяем, есть ли уже голос от пользователя
	Votes.findCommentVote(userId, commentId, (err, existingVote) => {
		if (err) {
			console.error('Error checking existing vote:', err);
			return res.status(500).json({ message: 'Server error' });
		}

		if (existingVote) {
			if (existingVote.vote === vote) {
				// Удаляем голос, если он такой же
				Votes.deleteCommentVote(userId, commentId, (err) => {
					if (err) {
						console.error('Error deleting vote:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					Votes.getCommentVotes(commentId, (err, result) => {
						if (err) {
							console.error('Error fetching total votes:', err);
							return res.status(500).json({ message: 'Server error' });
						}

						const totalVotes = result[0]?.totalVotes || 0;
						return res.status(200).json({ message: 'Vote removed', totalVotes });
					});
				});
			} else {
				// Заменяем голос на противоположный
				Votes.deleteCommentVote(userId, commentId, (err) => {
					if (err) {
						console.error('Error deleting vote:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					Votes.addCommentVote(userId, commentId, parseInt(vote), (err, voteId) => {
						if (err) {
							console.error('Error adding vote:', err);
							return res.status(500).json({ message: 'Server error' });
						}

						Votes.getCommentVotes(commentId, (err, result) => {
							if (err) {
								console.error('Error fetching total votes:', err);
								return res.status(500).json({ message: 'Server error' });
							}

							const totalVotes = result[0]?.totalVotes || 0;
							return res.status(201).json({ message: 'Vote updated', voteId, totalVotes });
						});
					});
				});
			}
		} else {
			// Добавляем новый голос
			Votes.addCommentVote(userId, commentId, parseInt(vote), (err, voteId) => {
				if (err) {
					console.error('Error adding vote:', err);
					return res.status(500).json({ message: 'Server error' });
				}

				Votes.getCommentVotes(commentId, (err, result) => {
					if (err) {
						console.error('Error fetching total votes:', err);
						return res.status(500).json({ message: 'Server error' });
					}

					const totalVotes = result[0]?.totalVotes || 0;
					return res.status(201).json({ message: 'Vote added', voteId, totalVotes });
				});
			});
		}
	});
}


module.exports = {
	voteOnThread,
	voteOnComment
};