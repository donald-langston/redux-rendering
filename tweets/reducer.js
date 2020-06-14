const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
];

function sortTweets(state, param, direction) {
    let tweetArray = state.map((tweet) => {
        return tweet;
    });
    tweetArray.sort(function(tweet1, tweet2) {
        //have to use param as variable to search on tweet object
        //param will hold likes, retweets, or replies
        //direction will sort tweets in ascending or descending order
        if(direction === "asc") {
            return tweet1[param] - tweet2[param];
        } else if(direction === "desc") {
            return tweet2[param] - tweet1[param];
        }
    });
    return tweetArray;
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, param, direction } = action;

    // ACTION 1 - Sort by # likes
    if(type === 'SORT' && param === 'likes' ) {
        let newState = sortTweets(state, param, direction);
        return newState;
    }

    // ACTION 2 - Sort by # retweets
    if(type === 'SORT' && param === 'retweets' ) {
        let newState = sortTweets(state, param, direction);
        return newState;
    }

    // ACTION 3 - Sort by # replies
    if(type === 'SORT' && param === 'replies' ) {
        let newState = sortTweets(state, param, direction);
        return newState; 
    }
    
    return state;
}