declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Reads the current values which are referenced from a base recipe and write it into the same recipe.
             * @param ctx An object holding functions for success and error.
             * @param recipeReference
             */
            function TeachRecipe(ctx: Required<TcHmi.Context>, recipeReference: string): void;
        }
    }
}
