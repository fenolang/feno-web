<template>
    <div>
        <v-layout row wrap>
            <v-flex xs3>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <Menu />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs9>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft35 bold">Archivos <span class="ft-green">#Meta</span> individuales</p>
                                <p class="ft13 lTXTgrey">
                                    Uno de los motivos de la existencia de Daft es presentar una mejora en cuanto a la limpieza del código frente a otras alternativas y bien sabemos que escribir las "meta tags" o elementos del meta en cada archivo junto a nuestro marcado es sucio y a la larga una mala práctica. Daft te presenta: los archivos #meta individuales
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="meaning">¿Qué son los Archivos #meta individuales?</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Los archivos de meta individuales o Meta Single Files son una novedad que implementa Daft para separar el elemento Meta de tus páginas. De tal manera que puedes crear un archivo que sólo sea para el meta de tu página y Daft automáticamente adjuntará su contenido a la página que corresponda.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="why">¿Por qué utilizar archivos meta?</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    El elemento meta a veces puede llegar a ser MUY extenso por configuraciones y trabajo en el SEO de tal manera que a largo plazo será un estorbo en nuestras páginas y será muy sucio tener todo nuestro meta junto a el verdadero contenido de cada página por lo tanto la solución es separar el meta de las páginas en un archivo distinto para mejorar la organización y limpieza de nuestro código.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="how">¿Cómo debo llamar a mis archivos meta?</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Daft automáticamente localizará tus archivos meta y aplicará su contenido a la página destino pero para eso cada archivo meta tiene que llamarse de acuerdo a ciertas reglas: debe comenzar con guión bajo y debe tener el mismo nombre que tiene la página para la que será el meta:
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-img :src="getSubelementImg"></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="starting">Creando un MSF</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Supongamos que tenemos un archivo llamado: index.daft con el documento siguiente:
                                </p>
                                <CodeBox>
                                    <Head>
                                    <Tab/><Attr>title:</Attr> <String>"Mi página web"</String>
                                    </Head>
                                    <Doc>
                                        <Tag>p</Tag>Bienvenido<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Ahora tenemos que ir a la carpeta llamada "meta" y creemos un nuevo archivo llamado: _index.daft. ¿Por qué? Porque los archivos de meta siempre deben iniciar su nombre con un guión bajo y en seguida el nombre de la página/documento al que se asignará. Nosotros tenemos un documento llamado "index.daft" de tal manera que su archivo de meta debe llamarse "_index.daft"
                                </p>
                                <p class="ft13 lTXTgrey">
                                    Y en ese nuevo archivo meta colocamos el siguiente contenido:
                                </p>
                                <CodeBox>
                                    <Tab/><Dmeta>
                                        <Tab/><Tab/><String>"description, Mi increíble descripción"</String>
                                    </Dmeta>
                                </CodeBox>
                                <p class="mt20 ft15 lTXTgrey">
                                    ¡Y listo! tenemos nuestro primer archivo de meta individual, Daft ahora sabrá que el archivo index.daft tiene asignado un archivo de meta entonces los dos archivos se fusionarán y el documento final que Daft transpilará será el siguiente:
                                </p>
                                <CodeBox>
                                    <Head>
                                    <Tab/><Attr>title:</Attr> <String>"Mi página web"</String>, <br>
                                    <Tab/><Dmeta>
                                        <Tab/><Tab/><String>"description, Mi increíble descripción"</String>
                                    </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Tag>p</Tag>Bienvenido<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" outlined type="warning" border="left">
                                     Si en la página destino (en éste ejemplo la página destino es: "index.daft") ya tienes un elemento meta declarado dentro de la instancia #Head entonces NO SE APLICARÁ el contenido del archivo meta
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb40">
                            <div class="spacing">
                                <Subtitle id="default">Definir un archivo meta por defecto</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Daft también nos da la opción de crear un archivo meta que se utilice por defecto cuando no creemos un archivo meta para una página. Tan sólo tenemos que crear un nuevo archivo en la carpeta llamada "meta" que tenga por nombre: "default.daft" ¡Y listo! Ahora si no aplicamos ningún meta para un archivo se le aplicará éste meta por defecto que podemos personalizar
                                </p>
                                <v-alert class="mt20" outlined type="warning" border="left">
                                    Si en la página destino ya tienes un elemento meta declarado dentro de la instancia #Head entonces NO SE APLICARÁ el contenido del archivo meta que tienes por defecto
                                </v-alert>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import Menu from '@/components/Docs/Menu.vue';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr,
        Doc, Head, Dmeta,
    }
})

export default class MetaSingleFiles extends Vue {
    @MenuModule.Action setButtons: any

    created() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ]);
    }

    mounted() {
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
        anchors.add('#meaning');
        anchors.add('#why');
        anchors.add('#how');
        anchors.add('#starting');
        anchors.add('#default');
    }

    get getSubelementImg() {
        if (this.$i18n.locale == 'es') {
            return '/msf_structure_es.png';
        } else if (this.$i18n.locale == 'en') {
            return '/msf_structure_en.png';
        } else {
            return '/msf_structure_en.png'
        }
    }
}

</script>