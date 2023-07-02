const chapters = [
    {
      id: 1,
      unitName: "Unit 1: Place value",
      topics: [
        {
            topicId: 'place-value',
            topicName: "Intro to Place value",
        },
        {
            topicId: 'whole-numbers',
            topicName: "Regrouping whole numbers",
        },
        {
            topicId: 'expanded-form',
            topicName: "Writing whole numbers in expanded form",
        },
        {
            topicId: 'ten-relates',
            topicName: "How 10 relates to place value",
        },
        {
            topicId: 'written-form',
            topicName: "Writing whole numbers in written form",
        },
        {
            topicId: 'multidigit-numbers',
            topicName: "Comparing multidigit numbers"
        }
        
      ],
      totalPoints: 1400,
      completed: 100
    },
    {
        id: 2,
        unitName: "Unit 2: Addition,Subtraction, and estimation",
        topics: [
          {
            topicId: 'rounding-whole',
            topicName: "Rounding whole numbers",
          },
          {
            topicId: 'adding-number',
            topicName: "Adding multidigit numbers",
          },
          {
            topicId: 'subtracting-multidigit',
            topicName: "Subtracting multidigit numbers",
          }
        ],
        totalPoints: 500,
        completed: 0
    },
]

module.exports.getAllChapters = (req,res) => {
    return res.send(chapters);
}

module.exports.getSpecificChapterDetails = (req,res) => {
    const id = req.params.id;
    return res.send(chapters[id-1]);
}