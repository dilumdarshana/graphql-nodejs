const { GraphQLScalarType, Kind } = require('graphql');

module.exports = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'DateTime scalar type',
        parseValue(value) {
            return new Date(value);
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(+ast.value) // ast value is always in string format
            }
            return null;
        },
        serialize(value) {
            const date = new Date(value);

            return date.toISOString();
        }
    })
};
