declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe.
             * @param ctx An object holding functions for success and error.
             * @param recipeReference
             * @param newRecipeName
             * @param newRecipePath
             */
            function TeachAsNewRecipe(ctx: Required<TcHmi.Context>, recipeReference: string, newRecipeName: string, newRecipePath: string): void;
        }
    }
}
