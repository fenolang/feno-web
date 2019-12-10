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
                                <p class="ft35 bold">Componentes</p>
                                <p class="ft13 lTXTgrey">
                                    Los componentes son pedazos de código reusables que podemos importar en nuestras páginas para reducir el código repetitivo y mejorar la limpieza en nuestro proyecto
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Creando nuestro primer componente</Title>
                                <p class="ft13 lTXTgrey">
                                    Nos dirigiremos a la carpeta llamada "components" y dentro crearemos un nuevo archivo llamado por ejemplo: "miboton.daft" y dentro colocaremos el siguiente contenido:
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>button</Tag>Presiona este botón<Tag>/button</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Ahora iremos a nuestra página principal: "index.daft" y llamaremos a nuestro componente mediante la función: <span class="bold">call()</span>
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi página principal"</String>
                                    </Head>
                                    <Doc>
                                        <Tag>h1</Tag>Bienvenido a mi sitio web<Tag>/h1</Tag> <br>
                                        <Tab/> <Func name="call"><String>"miboton"</String></Func>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    Los componentes SÓlO aceptan la instancia #Doc, si colocas un head o meta en un componente verás un error de compilación
                                </v-alert>
                                <p class="mt20 ft13 lTXTgrey">
                                    ¡Y listo! Daft llamará a el componente "miboton" en la página "index" por lo tanto aunque no lo veamos el documento final que se transpilará para el navegador será el siguiente:
                                </p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"Mi página principal"</String>
                                    </Head>
                                    <Doc>
                                        <Tag>h1</Tag>Bienvenido a mi sitio web<Tag>/h1</Tag> <br>
                                        <Tab/> <Tag>button</Tag>Presiona este botón<Tag>/button</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb40">
                            <div class="spacing">
                                <p class="ft15 lTXTgrey">
                                    Éste fue un ejemplo muy sencillo de cómo crear componentes ya que obviamente puedes lograr cosas mucho más complejas e incluso crear componentes interactivos con propiedades, ¡Sigue aprendiendo en la siguiente lección!
                                </p>
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
import { Tag, Tab, El, String, Attr, Comment, Mark, Func, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func,
        Doc, Head, Dmeta,
    }
})

export default class Components extends Vue {
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
    }
}

</script>