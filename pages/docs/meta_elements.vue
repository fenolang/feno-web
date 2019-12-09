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
                                <p class="ft35 bold">Elementos del Meta</p>
                                <p class="ft15 lTXTgrey">
                                    Hay mucho que aprender sobre las propiedades que podemos utilizar en nuestro #meta para lograr un buen SEO en nuestro proyecto
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>El elemento <span class="ft-green">#Meta</span></Title>
                                <p class="ft13 lTXTgrey">
                                    El elemento #Meta es un grupo de subelementos que puedes asimilar como un array, aquí es donde nosotros colocamos distintas propiedades como la descripción de nuestro sitio, cómo queremos que luzcan nuestros enlaces en facebook, twitter y demás cosas que conforman algo llamado: SEO. Podemos iniciar el elemento #Meta de la siguiente manera:
                                </p>
                                <CodeBox>
                                    <El>head:</El> { <br>
                                    <Tab/><El>title:</El> <String>"Este es mi titulo"</String> <br>
                                    <Tab/><El>meta:</El> [ <br>
                                    <Tab/><Tab/><Comment>#- Aquí irá el contenido de nuestro meta -#</Comment> <br>
                                    <Tab/>] <br>
                                    } <br>
                                    <El>doc:</El> { <br>
                                    <Tab/> <br>
                                    } <br>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="structure">Estructura de una propiedad</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Antes de empezar a ver cuáles son las propiedades que podemos utilizar dentro del elemento #Meta tenemos que entender <span class="bold">cómo es la estructura</span> de una propiedad:
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-img :src="getSubelementImg"></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing" id="description">
                                <Subtitle>¡Nuestra primera descripción!</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Ahora que sabemos cómo escribir un subelemento podemos comenzar a escribir nuestra primera propiedad: <span class="ft-green">description</span>
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <String>"description, Esta es la increíble descripción de mi página"</String>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí -#</Comment>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="author">Propiedad Author</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La propiedad <span class="ft-green">Author</span> es la indicada para colocar nuestro nombre como creador del sitio web, es importante y lo único que tenemos que hacer es lo siguiente:
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <String>"author, Tu maravilloso y hermoso nombre"</String>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí -#</Comment>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Entendiendo el elemento #Meta</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Mientras nosotros en Daft tan sólo éstamos llenando un elemento con propiedades internamente lo que está sucediendo es lo siguiente: (Tomando como ejemplo que queremos utilizar la propiedad #description y #author)
                                </p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>head</Tag> <br>
                                    <Tab/><Tab/> <Tag>meta <Attr>name</Attr>=<String>"description"</String> <Attr>content</Attr>=<String>"Esta es mi descripción"</String></Tag> <br>
                                    <Tab/><Tab/> <Tag>meta <Attr>name</Attr>=<String>"author"</String> <Attr>content</Attr>=<String>"Tu maravilloso y hermoso nombre"</String></Tag> <br>
                                    <Tab/> <Tag>/head</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Comment>&lt;!-- Nada por aquí --&gt;</Comment> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="functions">Funciones de importación</Title>
                                <p class="ft13 lTXTgrey">
                                    Daft cuenta con 2 funciones especializadas para importar archivos externos con contenido para tu documento:
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="style">Función <span class="ft-green">style()</span></Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La función <span class="ft-green">style()</span> nos ayuda a importar hojas de estilo de CSS, ¿Cómo lo hacemos? Checa lo siguiente
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi buen título"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Func name="style"><String>"nombre_del_archivo_css"</String></Func>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    ¿Viste eso? No hace falta colocar la extensión: <span class="bold">.css</span> ni siquiera colocar la ruta en donde se encuentra el archivo, nada más y nada menos que sólo el nombre del archivo.
                                </p>
                                <v-alert type="error" border="left" outlined>
                                    <span class="bold">¡ALERTA!</span> Sólo para los archivos que se encuentren dentro de la carpeta <span class="bold">styles</span> no es necesario colocar la ruta, si tu archivo <span class="bold">NO</span> se encuentra dentro de ésta carpeta o se encuentra en una subcarpeta de ésta misma tienes las siguientes opciones:
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Llamar a el archivo desde otra ruta</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Si tu archivo .css no se encuentra en la carpeta styles entonces SÍ debes colocar una ruta, supongamos que nuestro archivo se encuentra dentro de la carpeta styles PERO se encuentra dentro de una subcarpeta llamada "index", haríamos algo como ésto:
                                </p>
                                <CodeBox>
                                    <Func name="style"><String>"./index/mi_archivo"</String></Func>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    De nuevo recuerda que no es necesario colocar la extensión ".css", tan sólo colocamos un punto al inicio y comenzamos a colocar la ruta hacia el archivo. <br>
                                    Ahora, si nuestro archivo de estilos está FUERA totalmente de la carpeta styles y se encuentra en una carpeta llamada por ejemplo: "tools", hacemos algo como lo siguiente:
                                </p>
                                <CodeBox>
                                    <Func name="style"><String>"/tools/mi_archivo"</String></Func>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    Es importante que notes que cuando nuestro archivo de estilos esté fuera totalmente de la carpeta styles directamente colocamos la ruta con una barra: "/", PERO si en cambio nuestro archivo se encuentra en una subcarpeta dentro de la carpeta styles empezamos la ruta con un punto y barra como: "./"
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Configurar otra carpeta para los estilos</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Si no quieres utilizar la carpeta styles por defecto para tus estilos puedes configurar otra carpeta para utilizarla por defecto para que Daft ubique tus archivos .css, mira la sección de #Estilos en la guía del archivo de configuración de Daft:
                                </p>
                                <v-btn outlined class="border-btn">Ir a la sección indicada</v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="import">Función <span class="ft-green">#import</span></Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La función <span class="ft-green">import()</span> realiza la misma función que la función <span class="ft-green">style()</span> PERO esta función sólo funciona para archivos con extensión: <span class="bold">.daft</span>, la sintaxis es muy sencilla:
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi buen título"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Func name="import"><String>"nombre_del_archivo_daft"</String></Func>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    Si quieres llamar a un archivo que está fuera de la carpeta <span class="bold">scripts</span> puedes hacer lo mismo que indicamos aquí ( Sólo cambiaría la función style() por import() )
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Title>Propiedades</Title>
                                <Subtitle id="charset">Charset</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La propiedad Charset define el formato de codificación para nuestro sitio, por defecto todos utilizamos el valor de: "utf-8" y te recomendamos hacerlo así:
                                </p>
                                <CodeBox :mark="true">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi buen título"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Mark><String>"charset, utf-8"</String></Mark>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <Subtitle id="viewport">Viewport</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La propiedad Viewport nos proporciona la posibilidad de configurar cómo nuestro sitio se verá en dispositivos móviles y demás cosas relacionadas al responsive design, la mayoría utilizamos un estándar y es el siguiente en HTML:
                                </p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>head</Tag> <br>
                                    <Tab/><Tab/> <Mark><Tag>meta <Attr>name</Attr>=<String>"viewport"</String> <Attr>content</Attr>=<String>"width=device-width, initial-scale=1"</String></Tag></Mark> <br>
                                    <Tab/> <Tag>/head</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Comment>&lt;!-- Nada por aquí --&gt;</Comment> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                                <p class="ft15 lTXTgrey mt30">
                                    Pero Daft nos facilita la vida de tal manera que para realizar lo anterior tan sólo tenemos que escribir la palabra "viewport":
                                </p>
                                <CodeBox :mark="true" class="mt30">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi buen título"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Mark><String>"viewport"</String></Mark>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <Subtitle id="base">Base</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    En Daft <span class="bold">YA NO ES NECESARIO</span> colocar la propiedad base que colocamos en HTML ya que el mismo lenguaje lo hace automáticamente por nosotros ;)
                                </p>
                                <Subtitle id="noscript">Noscript</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Existen maneras de desactivar javascript en nuestro navegador de tal manera que tenemos que estar preparados ante éste tipo de situaciones. Daft nos proporciona el objeto NoScript:
                                </p>
                                <CodeBox :mark="true" class="mt30">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi buen título"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Mark>
                                            <Tab/><Tab/> <El>noscript:</El> { <br>
                                            <Tab/><Tab/><Tab/> <Tag>p</Tag>¡Este sitio necesita de JavaScript!<Tag>/p</Tag> <br>
                                            <Tab/><Tab/> } <br>
                                        </Mark>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <v-alert outlined type="warning" border="left" class="mt-4">
                                    Es importante saber que <span class="bold">noscript</span> NO es una instancia, es un objeto. Por lo tanto no recibe la misma prioridad ante errores que las instancias.
                                </v-alert>
                                <Subtitle id="noscript-default">Noscript por defecto</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Si no defines ningún objeto noscript entonces Daft añade uno por defecto para que no tengas que preocuparte de nada :)
                                </p>
                                <Subtitle>Configurar Noscript por defecto</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Ahora, sabemos que si queremos personalizar nuestro objeto noscript tenemos que definirlo en cada archivo, ¡eso es cansado! La solución podría ser crear un componente que tan sólo contenga nuestro objeto noscript y llamarlo en cada página, pero sigue siendo sucio. <br> <br>
                                    La solución que Daft nos proporciona es configurar y personalizar el objeto noscript que Daft por defecto agrega, ésto se realiza en el archivo de configuración de Daft. Presiona el siguiente enlace y mira todo acerca de cómo configurar el objeto noscript
                                </p>
                                <br>
                                <v-btn depressed class="bg3 dk">Ir a la sección indicada</v-btn>
                                <Subtitle id="more">Más propiedades</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Por supuesto que existen muchas más propiedades que las anteriores, pero ésto sería redundante, por lo tanto puedes visitar <a href="https://htmlhead.dev/#meta" target="_blank" class="ft-green">https://htmlhead.dev</a> y ver todas las propiedades del meta en HTML ya que también funcionan en Daft, PERO recuerda que si en HTML es así:
                                </p>
                                <CodeBox>
                                    <Tag>meta <Attr>name</Attr>=<String>"theme-color"</String> <Attr>content</Attr>=<String>"#0a8cbd"</String></Tag>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    En Daft es así
                                </p>
                                <CodeBox>
                                    <String>"theme-color, #0a8cbd"</String>
                                </CodeBox>
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
import { Tag, El, String, CodeBox, Tab, Comment, Attr, Func, Mark } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';
import { Title, Subtitle, Alert } from '@/components/Tools/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Doc, Head, Dmeta,
        Tag, El, String, CodeBox, Tab, Comment, Attr, Func, Mark,
        Title, Subtitle, Alert
    }
})

export default class MetaElements extends Vue {
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
        anchors.add('#structure');
        anchors.add('#structure');
        anchors.add('#description');
        anchors.add('#author');
        anchors.add('#functions');
        anchors.add('#style');
        anchors.add('#import');
    }

    get getSubelementImg() {
        if (this.$i18n.locale == 'es') {
            return '/meta_subelement_es.png';
        } else if (this.$i18n.locale == 'en') {
            return '/meta_subelement_en.png';
        } else {
            return '/meta_subelement_en.png'
        }
    }
}
</script>

<style>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>