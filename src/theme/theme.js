import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles:{
        global:{

            //全体の背景色
            body:{
                backgroudColor:"greay.100",
                color:"gray.800"
            }
        }
    }

}
);


export default theme;

