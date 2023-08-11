export class AppConstants {

    public static get baseServidor() : string { return "http://localhost:8080/"}

    public static get baseLogin() : string { return this.baseServidor + "/auth/login"}
    public static get baseRegistrar() : string { return this.baseServidor + "auth/register"}
    public static get baseLoginTarget() : string { return  "auth/login"}
    public static get baseUrl() : string { return this.baseServidor + "auth"}
    public static get baseRegistrarTarget() : string { return  "auth/register"}
    


}
