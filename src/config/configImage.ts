export default class ConfigImage {
    //public static readonly LOGO_GITHUB_PATH: string = "asset/image/github_logo.png";
    public static readonly LOGO_GITHUB = require("../asset/image/github_logo.png");
    public static readonly LOGO_LINKEDIN = require("../asset/image/linkedin_logo.png");
    public static readonly LOGO_OPQUAST_CERTIFICATE = require("../asset/image/opquast_certificate_logo.png");
    public static readonly LOGO_CV = require("../asset/image/cv_logo.png");
    public static readonly LOGO_DIGINAMIC = require("../asset/image/diginamic_logo.png");
    public static readonly LOGO_CNAM = require("../asset/image/cnam_logo.png");
    public static readonly LOGO_OPQUAST = require("../asset/image/opquast_logo.png");

    public static readonly PROJECTS_IMAGE = [
        {
            id: 0,
            url: require("../asset/image/gestion_projets.png")
        },
        {
            id: 1,
            url: require("../asset/image/affichage_communes.png")
        },
        {
            id: 2,
            url: require("../asset/image/dessin_fractales.png")
        },
        {
            id: 3,
            url: require("../asset/image/mastermind_angular.png")
        }
    ];
}