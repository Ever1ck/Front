import { Document, Page, View, Text, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { text } from 'stream/consumers';

Font.register({
  family: "TimesNewRoman",
  src: "/fonts/times_new_roman.ttf"
});
Font.register({
    family: "TimesNewRomanBold",
    src: "/fonts/times_new_roman_bold.ttf"
});
Font.register({
    family: "TimesNewRomanItalic",
    src: "/fonts/times_new_roman_italic.ttf"
});

const styles = StyleSheet.create({
    page: { backgroundColor: 'tomato', flexDirection: 'column', },
    tableContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        display:"flex",
        paddingTop:"45px",
        paddingHorizontal:"7.5%"
    },
    column25:{
        width:"25%",
        flexDirection:"column",
    },
    column50:{
        width:"50%",
        flexDirection:"column",
        alignItems: "center",
    },
    column100:{
        width:"column100%",
        flexDirection:"column",

        alignItems: "center",
    },
    rowTitulo: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        height:123,
    },
    row25: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        width: '25%',
    },
    row2550: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        width: '25%',
        height:"50%",
    },
    row50: {
        flexDirection: "row",
        alignItems: "center",
        width: '50%',
    },
    row5050: {
        flexDirection: "row",
        alignItems: "center",
        width: '50%',
        height:"50%",
    },
    row10050: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height:"50%",
    },
    row10025: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height:"25%",
    },
    Titulo:{
        fontSize:"14pt",
        textAlign:"center",
        fontFamily:"TimesNewRomanBold",
        width:"100%",
        paddingBottom:"10px"
    },
    Titulo2:{
        fontSize:"16pt",
        textAlign:"center",
        fontFamily:"TimesNewRomanBold",
        width:"100%",
        paddingBottom:"10px"
    },
    row: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        width: '100%',
    },
    rowTitulo1: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        width: '100%',
        height:'35px',
    },
    section: { color: '', textAlign: 'center', margin: 30 },
    ministerio: { height:30, margin:"auto", justifyContent:"flex-end", border:"1px"},
    foto: { height:75, marginLeft:"auto"},
    otorgado:{
        fontSize:"10pt",
        margin:"auto"
    },
  });

const PruebaPDF = () => {
    return(
        <Document>
            <Page size={'A4'} orientation='landscape'> 
                <View style={styles.tableContainer}>
                    <View style={styles.rowTitulo}>
                        <View style={styles.column25}>
                            <View style={{width:'100%', alignItems:'flex-start', height:'75%'}}>
                                <Image style={{height:'75%', alignItems:'center', marginVertical:"auto"}} src="/image/UpeuLogo.png"></Image>
                            </View>
                        </View>
                        <View style={styles.column50}>
                            <View style={styles.row10025}>
                                <Image style={styles.ministerio} src="/image/EscudoRep.jpeg"></Image>
                            </View>
                            <View style={styles.row10025}>
                                <Text style={{fontSize:"12pt", fontFamily:"TimesNewRomanBold", margin:"auto"}}>
                                    REPÚBLICA DEL PERÚ
                                </Text>
                            </View>
                            <View style={styles.row10050}>
                                <View style={styles.column100}>
                                    <Text style={styles.Titulo}>
                                        MINISTERIO DE EDUCACIÓN
                                    </Text>
                                    <Text style={styles.Titulo2}>
                                        A NOMBRE DE LA NACIÓN
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column25}>
                            <Image style={styles.foto} source="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABuCAYAAAC5ijQKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI2SURBVHhe7dYBbcJAAEZhzOACE2jAAhZwgAOEYAADGMAAArr+hHa3S8MGeVdI9r7kMtbrruXlKFv0Ogc6Fp0YBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhswbd7/fder3+Mc7n83226y6XS7fb7ca5vC7ny7l6DOf9tkZrswbNG9xut93pdBrH9Xq9zeVN5z7K+cTIsePxOJ4zzOX44XAYf886f1mjtVyrH/MFzS6dslqtbiFqOX+5XN5/+5Z7TrDSs2u08BFB8zHNPUx9NIddV8/lWBn0lTVayHX6MV/Q7JT8HEYkzKN7yFy9G+tjr6zRQq7Tj/mC1s/QGGIMz9NSjk3FqI+9skYLuU4/3vuRH97w1BdHjk3dX46VgV5Zo4Vcpx/vDRrZuflSKXdYnot5REz9Te653nHPrtHCxwRNhM1mc7uhnJeR1/m3Z0rm6qDPrtFCrtePeYLmWzY75pFESaiMcqfVHs3/dY0WZg36HxgUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWFjUAc6xFksvgBkRRQbLRc+SQAAAABJRU5ErkJggg=="></Image>
                        </View>
                    </View>
                    <View style={{width:"100%", marginHorizontal:"auto"}}>
                        <View style={styles.row}>
                            <View style={{margin:"auto", width:"100%", display:"flex"}}>
                                <Text style={{ fontSize:"12pt", margin:0}}>
                                    El director general del Instituto de Educación Superior (público/privado) 
                                </Text>
                                <Text style={{ fontSize:"14pt", paddingBottom:"8px"}}></Text>
                                <Text style={{ fontSize:"12pt", margin:0, textAlign:"justify"}}>
                                ........................................................................................................................................................................................................................... 
                                </Text>
                                <Text style={{ fontSize:"14pt", paddingBottom:"8px"}}></Text>
                                <Text style={{ fontSize:"12pt", margin:0, textAlign:"justify"}}>
                                    por cuanto ....................................................................................................................................................................................................
                                </Text><Text style={{ fontSize:"14pt", paddingBottom:"8px"}}></Text>
                                <Text style={{ fontSize:"12pt",margin:0, textAlign:"justify"}}>
                                    ha cumplido satisfactoriamente con las normas y disposiciones reglamentarias vigentes, le otorga el Grado de Bachiller Técnico 
                                </Text>
                                <Text style={{ fontSize:"14pt", paddingBottom:"8px"}}></Text>
                                <Text style={{ fontSize:"12pt", margin:0, textAlign:"justify"}}>
                                    de .....................................................................................................................................................................
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{margin:"auto", width:"100%", display:"flex", fontFamily:"TimesNewRomanItalic"}}>
                                <Text style={{ fontSize:"14pt", paddingBottom:"8px"}}>
                                </Text>
                                <Text style={{ fontSize:"12pt", marginLeft:"65.4pt"}}>
                                    POR TANTO:
                                </Text>
                                <Text style={{ fontSize:"12pt", marginLeft:"65.4pt"}}>
                                    Se expide el presente GRADO DE BACHILLER TÉCNICO para que se le reconozca como tal.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{margin:"auto", width:"100%", display:"flex", fontFamily:"TimesNewRomanItalic"}}>
                                <Text style={{ fontSize:"14pt", paddingBottom:"8px"}}>
                                </Text>
                                <Text style={{ fontSize:"12pt", margin:0, textAlign:"right"}}>
                                    Dado en _______________a los ______días del mes de ________________de _____
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{margin:"auto", width:"100%", display:"flex", textAlign:"center"}}>
                                <Text style={{ fontSize:"14pt", paddingBottom:"30px"}}>
                                </Text>
                                <Text style={{ fontSize:"12pt", margin:0}}>
                                    _________________________
                                </Text>
                                <Text style={{ fontSize:"10pt", margin:0}}>
                                    DIRECTOR GENERAL
                                </Text>
                                <Text style={{ fontSize:"10pt", margin:0}}>
                                    (sello, firma, posfirma)
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size={'A4'} orientation='landscape'> 
                <View style={{margin:"auto", width:"35%", border:1}}>
                    <View style={{ height:"75px", width:"100%"}}>
                        <Image style={{height:"50px", alignItems:'center', marginVertical:"auto"}} src="/image/UpeuLogo.png"></Image>
                    </View>
                    <View style={{ height:"50px"}}>
                        
                    </View>
                </View>
            </Page>
        </Document>
    )}; 
export default PruebaPDF;