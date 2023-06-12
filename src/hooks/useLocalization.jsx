import { useContext } from "react";
import { Context } from "../context/locaization";


export const useLocalization = (setterOnly = false) => {
    const ctx = useContext(Context)
    return setterOnly ? [ctx.setLang] : [ctx.lang, ctx.setLang]
}