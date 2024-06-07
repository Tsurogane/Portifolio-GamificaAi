import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logo2 from "./images/logo-vertical.png";
import gamificacao from "./images/gamificacao.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  logo2: new ImageSource(logo2),
  gamificacao: new ImageSource(gamificacao),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}