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
                            <div class="pt20 spacing">
                                <p class="ft35 bold">Elementos</p>
                                <p class="ft15 lTXTgrey">
                                    En Cactus llamamos "Elementos" a lo que en HTML se conoce como "Etiquetas", aquí aprenderas todo lo necesario sobre cómo construir la estructura de tu sitio web:
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <p class="ft25 mb-2">Reglas de escritura</p>
                                <hr class="subtitle">
                                <p class="ft20 mb-2">Abrir y cerrar elementos</p>
                                <hr class="mark-this">
                                <p class="ft13 lTXTgrey">
                                    En Cactus no es necesario cerrar una elemento sin embargo sí que podemos hacerlo, las dos líneas de abajo funcionan exactamente igual:
                                </p>
                                <code-box>
                                    <El>h1:</El> Mi título <El>!h1</El> <br>
                                    <El>h1:</El> Mi título
                                </code-box>
                                <p class="ft13 lTXTgrey pt20">
                                    Aquí tienes algunos ejemplos de variaciones de escritura:
                                </p>
                                <code-box>
                                    <El>p:</El> Elemento sin cierre <br>
                                    <El>p:</El> Elemento con cierre <El>!p</El> <br>
                                    <El>p: </El> Un elemento <El>span:</El> Otro elemento dentro <br>
                                    <El>box:</El> <br>
                                    &nbsp;&nbsp;&nbsp;<El>h2:</El> Un increíble texto por acá
                                </code-box>
                                <p class="ft13 lTXTgrey pt20">
                                    Y aquí tienes el resultado en Html:
                                </p>
                                <code-box>
                                    <Tag>p</Tag>Etiqueta sin cierre<Tag>/p</Tag> <br>
                                    <Tag>p</Tag>Etiqueta con cierre<Tag>/p</Tag> <br>
                                    <Tag>p</Tag>Una etiqueta<Tag>span</Tag>Otra etiqueta dentro<Tag>/span</Tag><Tag>/p</Tag> <br>
                                    <Tag>div</Tag> <br>
                                    &nbsp;&nbsp;&nbsp;<Tag>h2</Tag>Un increíble texto por acá<Tag>/h2</Tag> <br>
                                    <Tag>/div</Tag>
                                </code-box>
                                <div class="pt20">
                                    <p class="ft13 lTXTgrey">
                                        A este punto nos podemos dar cuenta ya de algunas reglas de Cactus:
                                    </p>
                                    <ul class="ft15">
                                        <li>Abrimos un elemento con el nombre de la misma y ":"</li>
                                        <li>Cerramos un elemento con "!" y en seguida el nombre de la etiqueta a cerrar</li>
                                        <li>No es necesario cerrar elementos pero puedes hacerlo</li>
                                        <li>Si no cierras un elemento debes dejar un espacio o salto de línea al final antes de continuar a definir un nuevo elemento</li>
                                    </ul>
                                </div>
                                <p class="ft25 mt40 mb-2">Comentarios</p>
                                <hr class="subtitle">
                                <p class="ft13 lTXTgrey">
                                    En Cactus existen 2 tipos de comentarios: <span class="bold">Los comentarios visibles durante producción</span> y <span class="bold">Los comentarios visibles durante desarrollo</span>
                                </p>
                                <p class="ft20 mb-2">Comentarios visibles en producción</p>
                                <hr class="mark-this">
                                <p class="ft13 lTXTgrey">
                                    Éste tipo de comentarios se transpilan a comentarios de Html, tan sólo debemos escribir algo como lo siguiente:
                                </p>
                                <code-box>
                                    <Comment>#- Mi comentario -#</Comment>
                                </code-box>
                                <p class="ft13 lTXTgrey pt20">
                                    Y lo anterior se transpilará a un comentario de Html: <span class="bold">&lt;!-- Mi comentario --&gt;</span>
                                </p>
                                <p class="ft20 mb-2">Comentarios visibles sólo en desarrollo</p>
                                <hr class="mark-this">
                                <p class="ft13 lTXTgrey">
                                    Éste tipo de comentarios no se transpilan a Html, por lo tanto tan sólo sirven como anotaciones durante el desarrollo ya que Cactus los elimina para la versión en producción, un comentario de éste tipo luce así:
                                </p>
                                <code-box>
                                    <Comment>/* Comentario sólo visible en desarrollo */</Comment>
                                </code-box>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="pt20 spacing">
                                <p class="ft25 mb-2">Elementos</p>
                                <hr class="subtitle">
                                <p class="ft20 mb-2">Box</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">Box es un contenedor que puedes utilizar para tus elementos, actualmente se transpila a un div o section en HTML depende la situación</p>
                                <code-box>
                                    <El>box: </El>¡Hola! <El>!box</El>
                                </code-box>
                                <p class="ft20 mb-2 mt-4">Text</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">
                                    Text es el elemento general para colocar un texto, puede cambiar su forma mediante atributos: inicialmente se transpila a una etiqueta &lt;p&gt; pero puede ser un &lt;span&gt; o un &lt;h1&gt; al &lt;h6&gt;
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <code-box>
                                    <El>text: </El>Texto normal <br>
                                    <El>text(<Attr>in</Attr>):</El> Texto incrustado <br>
                                    <El>text(<Attr>hline</Attr>):</El> Un título <br>
                                    <El>text(<Attr>hline2</Attr>):</El> Un título tamaño 2 <br>
                                    <El>text(<Attr>hline3</Attr>):</El> Un título tamaño 3 <br>
                                    <El>text(<Attr>hline4</Attr>):</El> Un título tamaño 4 <br>
                                    <El>text(<Attr>hline5</Attr>):</El> Un título tamaño 5 <br>
                                </code-box>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <Viewer>
                                    <p>Texto normal</p>
                                    <span>Texto incrustado</span>
                                    <h1>Un título</h1>
                                    <h2>Un título tamaño 2</h2>
                                    <h3>Un título tamaño 3</h3>
                                    <h4>Un título tamaño 4</h4>
                                    <h5>Un título tamaño 5</h5>
                                    <h6>Un título tamaño 6</h6>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft20 mb-2">Bold</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">Cuando necesitamos un texto en <span class="bold">negritas</span> tan sólo hace falta insertar nuestro texto dentro del elemento <span class="bold">bold</span></p>
                                <code-box>
                                    <El>bold:</El> <br>
                                    &nbsp;&nbsp;<El>text:</El> Mi texto en negritas
                                </code-box>
                                <Viewer class="mt20">
                                    <b>
                                        <p>Mi texto en negritas</p>
                                    </b>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft20 mb-2">Italic</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">Cuando necesitamos un texto en <span class="italic">cursiva</span> tan sólo hace falta insertar nuestro texto dentro del elemento <span class="italic bold">italic:</span></p>
                                <code-box>
                                    <El>italic:</El> <br>
                                    &nbsp;&nbsp;<El>text:</El> Mi texto en cursiva
                                </code-box>
                                <Viewer class="mt20">
                                    <i>
                                        <p>Mi texto en cursiva</p>
                                    </i>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft20 mb-2">Break</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">Cuando queremos hacer un salto de línea en Cactus utilizamos el elemento <span class="bold">!br</span></p>
                                <code-box>
                                    <El>text:</El> <br>
                                    &nbsp;&nbsp;<El>text(<Attr>in</Attr>):</El> Hola Amigo! <El>!br</El> <br>
                                    &nbsp;&nbsp;<El>text(<Attr>in</Attr>):</El> Adiós! <br>
                                </code-box>
                                <Viewer class="mt20">
                                    <p>
                                        <span>Hola Amigo!</span> <br/>
                                        <span>Adiós!</span>
                                    </p>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft20 mb-2">Quote</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">Existe un elemento especializado para colocar una frase, si vienes de HTML conocerás la existencia de la etiqueta: <span class="bold">blockquote</span>, en Cactus simplemente colocamos el elemento: <span class="bold">quote</span></p>
                                <code-box>
                                    <El>quote:</El> "El mayor enemigo del programador es: el punto y coma"
                                </code-box>
                                <Viewer class="mt20 mb20">
                                    <blockquote>"El mayor enemigo del programador es: el punto y coma"</blockquote>
                                </Viewer>
                                <p class="ft15 lTXTgrey">
                                    El elemento <span class="bold">quote</span> tiene un parametro especial llamado: <span class="bold">cite</span>, puedes saber más acerca de este parámetro en: <router-link class="ft-green bold txt-line" to="/">Parámetros > Cite</router-link>
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft20 mb-2">Line</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">En HTML conocerás la etiqueta <span class="bold">hr</span>, el equivalente en Cactus es el elemento <span class="bold">!line</span></p>
                                <code-box>
                                    <El>!line</El>
                                </code-box>
                                <Viewer class="mt20">
                                    <hr>
                                </Viewer>
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
import codebox from '@/components/code-box.vue';
import El from '@/components/Code/El.vue';
import String from '@/components/Code/String.vue';
import Comment from '@/components/Code/Comment.vue';
import Tag from '@/components/Code/Tag.vue';
import Attr from '@/components/Code/Attr.vue';
import Viewer from '@/components/Code/Viewer.vue';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        'code-box': codebox, Viewer,
        Menu, El, String, Comment, Tag, Attr
    }
})

export default class Tags extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ]);
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
    .mark-this {
        background: #2c2e41 !important;
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
    .txt-line:hover {
        border-bottom: 2px solid !important;
        border-color: #99CA3E !important;
    }
    .subtitle {
        background: #99CA3E !important;
        width: 100px;
        height: 4px;
        border: none;
        margin-bottom: 30px;
    }
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
</style>
