const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar DateTime
    type Author {
        id: Int!
        firstName: String
        lastName: String
        posts: [Post]
    }
    type Post {
        id: Int!
        title: String
        authorId: ID!
        votes: Int
    }
    type SinglePost {
        id: Int!
        title: String
        authorId: ID!
        votes: Int
    }
    input ArtistData {
        name: String!
        alphabet: String!
    }
    type Artist {
        id: String!
        name: String!
    }
    type ArtistCreateResponse {
        success: Boolean
        result: Artist
    }
    input AlbumData {
        name: String!
        artist: String!
        year: String!
    }
    type AlbumCreateResponse {
        success: Boolean
    }
    type Query {
        posts: [Post]
        post(id: Int!): SinglePost
        author(id: Int!): Author
    }
    type Mutation {
        createArtist(artist: ArtistData): ArtistCreateResponse
        createAlbum(album: AlbumData): AlbumCreateResponse
    }
`

module.exports = typeDefs;
