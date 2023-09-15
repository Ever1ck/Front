import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import { text } from 'stream/consumers';

const styles = StyleSheet.create({
    page: { backgroundColor: 'tomato' },
    section: { color: '', textAlign: 'center', margin: 30 },
    section1: { width: 143, height: 30, margin:"0 auto 0 0", display: "none" }
  });

const UnidadesPDF = () => {
return(
    <Document>
        <Page orientation='landscape' size={'A4'}>
            <View>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:12pt;">
        <span className="height:0pt; text-align:left; display:block; position:absolute; z-index:2;">
            <img width="143" height="30" src="/image/Logo_del_Ministerio_de_Educación_del_Perú_-_MINEDU.png"/>
        </span>
        <img src="" width="84" height="110" alt="" className="float: left; "/>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:12pt;">
        <strong>
            <span className="font-family:Arial;">&nbsp;</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:14pt;">
        <strong>
            <span className="font-family:Arial;">&nbsp;</span>
        </strong></p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:14pt;">
        <strong>
            <span className="font-family:Arial;">&nbsp;</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:14pt;">
        <strong>
            <span className="font-family:Arial;">&nbsp;</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-left:35.4pt; margin-bottom:0pt; text-indent:35.4pt; text-align:center; line-height:normal; font-size:12pt;"><strong><span className="font-family:Arial;">Instituto de Educaci&oacute;n Superior&nbsp;</span></strong><strong><span className="font-family:Arial; color:#0070c0;">Privado</span></strong></p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:12pt;">
        <strong>
            <span className="font-family:Arial;">&ldquo;</span>
        </strong>
        <strong>
            <span className="font-family:Arial; color:#0070c0;">“Adventistas del Titicaca”</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:12pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; page-break-after:avoid; line-height:normal; font-size:16pt;">
        <strong>
            <span className="font-family:Arial;">CERTIFICA</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:normal; font-size:12pt;">
        <span className="font-family:'Times New Roman';">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:6pt; line-height:normal; font-size:10pt;"><span className="font-family:Arial;">que &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;............................................................. ha cursado las unidades did&aacute;cticas, que se indican en el&nbsp;</span></p>
    <p className="margin-top:0pt; margin-bottom:6pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">programa de estudios: &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..............................................................................................................................................</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">El resultado final de las evaluaciones fue el siguiente:</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <View>
        <table cellSpacing="0" cellPadding="0" className="width:699pt; margin-right:auto; margin-left:auto; border:0.75pt solid #000000; border-collapse:collapse;">
            <tbody>
                <tr className="height:12.75pt;">
                    <td rowSpan={2} className="width:237.05pt; border-right-className:solid; border-right-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">Unidades did&aacute;cticas&nbsp;</span>
                            </strong>
                        </p>
                    </td>
                    <td rowSpan={2} className="width:52.95pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">N&uacute;mero de cr&eacute;ditos</span>
                            </strong>
                        </p>
                    </td>
                    <td colSpan={2} className="width:116.8pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">Calificaci&oacute;n</span>
                            </strong>
                        </p>
                    </td>
                    <td rowSpan={2} className="width:53pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong><span className="font-family:Arial;">A&ntilde;o</span>
                        </strong>
                    </p>
                    </td>
                    <td rowSpan={2} className="width:53.45pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">Periodo acad&eacute;mico</span>
                            </strong>
                        </p>
                    </td>
                    <td rowSpan={2} className="width:120.2pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:middle; background-color:#e7e6e6;">
                        <p className="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">Observaciones</span>
                            </strong>
                        </p>
                    </td>
                </tr>
                <tr className="height:12.75pt;">
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top; background-color:#e7e6e6;">
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">En n&uacute;meros</span>
                            </strong>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top; background-color:#e7e6e6;">
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">En</span>
                            </strong>
                        </p>
                        <p className="margin-top:2pt; margin-bottom:2pt; text-align:center; font-size:10pt;">
                            <strong>
                                <span className="font-family:Arial;">letras</span>
                            </strong>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className="width:237.05pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:52.95pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53.45pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:120.2pt; border-top-className:solid; border-top-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className="width:237.05pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:52.95pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53.45pt; border-className:solid; border-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:120.2pt; border-top-className:solid; border-top-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; border-bottom-className:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className="width:237.05pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:52.95pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:53.45pt; border-top-className:solid; border-top-width:0.75pt; border-right-className:solid; border-right-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                    <td className="width:120.2pt; border-top-className:solid; border-top-width:0.75pt; border-left-className:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                        <p className="margin-top:0pt; margin-bottom:0pt; font-size:10pt;">
                            <span className="font-family:Arial;">&nbsp;</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </View >
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; text-align:right; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">Lugar y fecha &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">&nbsp;</span>
    </p>
    <p className="margin-top:0pt; margin-left:35.4pt; margin-bottom:0pt; text-indent:35.4pt; text-align:center; line-height:normal;">
        ___________________________
    </p>
    <p className="margin-top:0pt; margin-left:35.4pt; margin-bottom:0pt; text-indent:35.4pt; text-align:center; line-height:normal; font-size:10pt;">
        <strong>
            <span className="font-family:Arial;">DIRECTOR GENERAL</span>
        </strong>
    </p>
    <p className="margin-top:0pt; margin-left:35.4pt; margin-bottom:0pt; text-indent:35.4pt; text-align:center; line-height:normal; font-size:10pt;">
        <span className="font-family:Arial;">(sello, firma, posfirma)</span>
    </p>
        </View >
        </Page>
        
</Document>
    
)}; 
export default UnidadesPDF;