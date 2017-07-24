var response = require('./responses');

module.exports = {
    newLogicArray: [
        {
            keywords: {
                required: [
                    "library"
                ],
                alternatives: [
                    [
                        "working hours",
                        "opening times",
                        "opening time",
                        "working hour",
                        "close",
                        "today",
                        "open"
                    ],
                    [
                        "hargreaves",
                        "hargraves",
                        "hargrave",
                        "hargrave andrew",
                        "andrew",
                        "hargrave-andrew"
                    ]
                ]
            },
            response: response.getHalTime()
        },
        {
            keywords: {
                required: [
                    "library",
                    "matheson"
                ],
                alternatives: [
                    [
                        "working hours",
                        "opening times",
                        "opening time",
                        "working hour",
                        "close",
                        "today",
                        "open"
                    ],
                    [
                        "matheson",
                        "mathesons",
                        "matheasons",
                        "matherson",
                        "matho",
                    ]
                ]
            },
            response: response.getMathesonTime()
        },
        {
            keywords: {
                required: [
                    "parking",
                    "free"
                ],
                alternatives: [
                    "on campus",
                    "university",
                    "uni",
                    "monash",
                    "today"
                ]
            },
            response: response.getParkLocation()
        },
        {
            keywords: {
                required: [
                    "when"
                ],

                alternatives: [
                    "tutorial",
                    "class",
                    "lab",
                    "lecure",
                    "practical",
                    "prac",
                    "laboratory"
                ]
            },
            response: response.getClassLocation()


        },
        {
            keywords: {
                required: [
                    "how",
                    "fees",
                    "pay"
                ],

                alternatives: [

                ]
            },
            response: response.getFeesPay()


        },


        {
            keywords: {
                required: [
                    "introduce"
                ],

                alternatives: [
                    "yourself"
                ]
            },
            response: response.getIntroRes()


        },
        {
            keywords: {
                required: [
                    "you"
                ],

                alternatives: [
                    "can",
                    "are you",
                    "able",
                    "what",
                    "help"
                ]
            },
            response: response.getCanDo()


        },


        {
            keywords: {
                required: [
                    "assignment"
                ],

                alternatives: [
                    [
                    "due",
                    "what",
                    "how many"
                        ]
                ]
            },
            response: response.getAssign()
        },
        {
            keywords: {
                required: [
                    "email"
                ],

                alternatives: [
                    [
                    "email",
                    "how many",
                    "do i"
                    ]
                ]

            },
        response: response.getMail()
        }

    ]



};
