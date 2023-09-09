export class AppConstants {

    public static get baseServidor() : string { return "http://localhost:8080/"}

    public static get baseLogin() : string { return this.baseServidor + "/auth/login"}
    public static get baseRegistrar() : string { return this.baseServidor + "auth/register"}
    public static get baseLoginTarget() : string { return  "auth/login"}
    public static get baseUrl() : string { return this.baseServidor + "auth"}
    public static get baseRegistrarTarget() : string { return  "auth/register"}
    public static get baseTodasAsReceitas() : string { return  "recipes/getAll"}
    public static get baseTodasAsReceitasPage() : string { return  "recipes/getAllPage/"}
    public static get baseTodasAsReceitasSemGluten() : string { return  "recipes/getByType/"}
    public static get baseTodasAsReceitasSemGlutenPage() : string { return  "recipes/getAllPageType/g/"}
    public static get baseTodasAsReceitasSemLactosePage() : string { return  "recipes/getAllPageType/l/"}
    public static get receitaGlutenIa() : string { return  "recipes/chat/"}
    public static get receitaLactoseIa() : string { return  "recipes/chatLac/"}
    public static get buscarUsuario() : string { return  "auth/searchUser/"}
    public static get attUsuario() : string { return  "auth/att"}
    public static get salvarReceita() : string { return  "recipes/saveRecipe/"}
    public static get salvarIngrediente() : string { return  "ingredients/saveIngredient/"}
    public static get procurarImg() : string { return  "recipes/searchImage/"}
    public static get pegarReceita() : string { return  "recipes/getRecipe/"}
    public static get pegarIngredientes() : string { return  "ingredients/getByRecipe/"}
    public static get salvarReceitaSemImagem() : string { return  "recipes/saveRecipeWithoutImage/"}

}
