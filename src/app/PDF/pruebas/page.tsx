import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import { text } from 'stream/consumers';

const styles = StyleSheet.create({
    page: { backgroundColor: 'tomato', flexDirection: 'column', },
    tableContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        display:"flex"
    },
    column25:{
        width:"25%",
        flexDirection:"column",
        border:"1px",
    },
    column50:{
        width:"50%",
        flexDirection:"column",
        border:"1px",
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
        border:"1px"
    },
    row50: {
        flexDirection: "row",
        alignItems: "center",
        width: '50%',
        border:"1px"
    },
    row5050: {
        flexDirection: "row",
        alignItems: "center",
        width: '50%',
        height:"50%",
        border:"1px"
    },
    row10050: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height:"50%",
        border:"1px",
    },
    Titulo:{
        fontSize:"12pt",
        textAlign:"center",

        width:"100%"
    },
    row: {
        flexDirection: "row",
        display:"flex",
        alignItems: "center",
        border:"1px",
        width: '100%',
    },
    section: { color: '', textAlign: 'center', margin: 30 },
    ministerio: { height:30, margin:"auto", justifyContent:"flex-end",},
    foto: { height:75, marginRight:15, marginLeft:"auto", marginTop:5},
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
                            <View style={styles.row2550}></View>
                            <View style={styles.row2550}></View>
                        </View>
                        <View style={styles.column50}>
                            <View style={styles.row10050}>
                                <Image style={styles.ministerio} src="/image/Logo_del_Ministerio_de_Educación_del_Perú_-_MINEDU.png"></Image>
                            </View>
                            <View style={styles.row10050}>
                                <View style={styles.column100}>
                                    <Text style={styles.Titulo}>
                                        Instituto de Educación Superior Privado
                                    </Text>
                                    <Text style={styles.Titulo}>
                                        “Adventistas del Titicaca”
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column25}>
                            <Image style={styles.foto} source="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABuCAYAAAC5ijQKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI2SURBVHhe7dYBbcJAAEZhzOACE2jAAhZwgAOEYAADGMAAArr+hHa3S8MGeVdI9r7kMtbrruXlKFv0Ogc6Fp0YBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhBoUZFGZQmEFhswbd7/fder3+Mc7n83226y6XS7fb7ca5vC7ny7l6DOf9tkZrswbNG9xut93pdBrH9Xq9zeVN5z7K+cTIsePxOJ4zzOX44XAYf886f1mjtVyrH/MFzS6dslqtbiFqOX+5XN5/+5Z7TrDSs2u08BFB8zHNPUx9NIddV8/lWBn0lTVayHX6MV/Q7JT8HEYkzKN7yFy9G+tjr6zRQq7Tj/mC1s/QGGIMz9NSjk3FqI+9skYLuU4/3vuRH97w1BdHjk3dX46VgV5Zo4Vcpx/vDRrZuflSKXdYnot5REz9Te653nHPrtHCxwRNhM1mc7uhnJeR1/m3Z0rm6qDPrtFCrtePeYLmWzY75pFESaiMcqfVHs3/dY0WZg36HxgUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWEGhRkUZlCYQWFjUAc6xFksvgBkRRQbLRc+SQAAAABJRU5ErkJggg=="></Image>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{margin:"auto"}}>
                            <Text style={{margin:"auto"}}>
                                CERTIFICADO MODULAR
                            </Text>
                        </View>
                    </View>
                    <View style={{margin:"auto", lineHeight:1.2, border:"1px", width:"100%"}}>
                        <Text style={styles.otorgado}>
                            Otorgado por: 
                        </Text> <Text style={styles.otorgado}>
                            DAVID MAMANI PARI
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )}; 
export default PruebaPDF;