const { find, filter } = require('lodash');
const ArtistService = require('../service/artistService');

const authors = [
    { id: 1, firstName: "Tom", lastName: "Coleman" },
    { id: 2, firstName: "Sashko", lastName: "Stubailo" },
    { id: 3, firstName: "Mikhail", lastName: "Novikov" },
];

const posts = [
    { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
    { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
    { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
    { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 },
];

const resolvers =  {
    Query: {
        posts: () => posts,
        post: (_, { id }) => find(posts, { id }),
        author: (_, { id }) => find(authors, { id }),
    },
    Mutation: {
        createArtist: async (_, { artist }) => {
            const result = await ArtistService.create(artist);

            return {
                success: true,
                result,
            }
        },
        createAlbum: async (_, { album }) => {
            
        }
    },
}

module.exports = resolvers;