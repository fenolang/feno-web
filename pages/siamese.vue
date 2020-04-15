<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-img src="/siamese.jpg" height="500"
                gradient="to top right, rgba(17,44,41,.80), rgba(17,44,41,.80)">
                    <div class="center-txt pt150">
                        <p class="ft150 bold scolor2 mb-0" style="line-height: 1.0;">Siamese</p>
                        <p class="dk ft-medium">El futuro de Feno.</p>
                    </div>
                </v-img>
            </v-flex>
            <v-flex xs12>
                <div class="center-txt pt50">
                    <p class="ft-medium ft30">Un nuevo color</p>
                    <p class="lTXTgrey">Feno Siamese es un nueva forma de programar y desarrollar aplicaciones con Feno</p>
                </div>
            </v-flex>
            <v-flex xs12 class="mt20 mb50">
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <CodeBox h="w500 f-right">
                                <Attr>use</Attr> <Fun>Feno</Fun> { <br><br>
                                <Tab/> <Attr>this</Attr>.<El>title</El> = <String>"Bienvenido a Siamese"</String>; <br>
                                <Tab/> <El>def</El> <Attr>String</Attr> hello = <String>"Hola, Mundo!"</String>;<br><br>
                                <Tab/> <Fun>render</Fun> ( <br>
                                    <Tab/><Tab/> <Tag>h1</Tag><span v-pre>{{ hello }}</span><Tag>/h1</Tag> <br>
                                <Tab/>) <br> <br>
                                }
                            </CodeBox>
                        </v-flex>
                        <v-flex xs6>
                            <Viewer attrs="w500 h225 mr50" tabs="Bienvenido a Siamese">
                                <h1>Hola, Mundo!</h1>
                            </Viewer>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex class="mb30">
                <v-container grid-list-lg>
                    <div class="spacing">
                        <h1>Introduciendo Siamese</h1>
                        <div class="mark"></div>
                        <p>Siamese Feno es una propuesta al futuro de Feno y sus funciones tratando de mejorar la forma en la que se trabaja con el lenguaje. Éstos son algunos de los cambios:</p>
                    </div>
                </v-container>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-lg>
                    <div class="spacing">
                        <h2>No más instancias.</h2>
                        <p>
                            Sabemos que Feno trabaja a través de instancias como Document, Head y más. Siamese deja a un lado a todas éstas instancias y trabaja con una función principal: Feno, que podemos utilizar con la palabra reservada: use. Puedes ver éste ejemplo trabajado con Feno y por la derecha con Siamese.
                        </p>
                    </div>
                </v-container>
            </v-flex>
            <v-flex xs12 class="mb50">
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <El>title</El>: <String>"Mi pagina web"</String>
                                </Head>
                                <Doc>
                                    <Tab/> <Tag>p</Tag>Bienvenido<Tag>/p</Tag>
                                </Doc>
                            </CodeBox>
                        </v-flex>
                        <v-flex xs6>
                            <CodeBox>
                                <Attr>use</Attr> <Fun>Feno</Fun> { <br>
                                    <Tab/><Attr>this</Attr>.<El>title</El> = <String>"Mi pagina web"</String>; <br>
                                    <Tab/> <Fun>render</Fun> ( <br>
                                        <Tab/><Tab/> <Tag>p</Tag>Bienvenido<Tag>/p</Tag> <br>
                                    <Tab/>) <br>
                                }
                            </CodeBox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-lg>
                    <div class="spacing">
                        <h2>Todo en uno.</h2>
                        <p>
                            Ahora que no hay instancias, todo se escribe en el mismo lugar. De manera que si queremos definir una variable o función podemos hacerlo dónde queramos.
                        </p>
                    </div>
                </v-container>
            </v-flex>
            <v-flex xs12 class="mb50">
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <CodeBox>
                                <Doc>
                                    <Tab/> <Tag>p</Tag><span v-pre>{{ text }}</span><Tag>/p</Tag>
                                </Doc> <br>
                                <Attr>new</Attr> <Func name="Feno">{<br>
                                    <Tab/> <El>def</El> <Attr>String</Attr> text = <String>"Hola Mundo!"</String>; <br> <br>
                                    <Tab/> <El>fun</El> message: <br>
                                        <Tab/><Tab/> <Func name="print"><String>"Bienvenidos!"</String></Func>; <br>
                                    <Tab/> } <br> <br>
                                    <Tab/> <Func name="message"></Func> <br>
                                }</Func>
                            </CodeBox>
                        </v-flex>
                        <v-flex xs6>
                            <CodeBox>
                                <Attr>use</Attr> <Fun>Feno</Fun> { <br>
                                    <Tab/> <El>def</El> <Attr>String</Attr> text = <String>"Hola Mundo!"</String>; <br> <br>
                                    <Tab/> <El>Fun</El> message: <br>
                                        <Tab/><Tab/> <Func name="print"><String>"Bienvenidos!"</String></Func>; <br>
                                    <Tab/> } <br> <br>
                                    <Tab/> <Func name="message"></Func> <br> <br>
                                    <Tab/> <Fun>render</Fun> ( <br>
                                        <Tab/><Tab/> <Tag>p</Tag><span v-pre>{{ text }}</span><Tag>/p</Tag> <br>
                                    <Tab/>) <br>
                                }
                            </CodeBox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
const anchorJS = require('anchor-js');

// Editor components ->
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Fun, Key, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

export default {
    components: {
        Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Fun, Key, Func, Viewer,
        Doc, Head, Dmeta
    }
}

</script>

<style>
.mark{
    background: #112C29 !important;
    width: 100px;
    height: 3px;
    border: none;
    margin-bottom: 30px;
}
</style>