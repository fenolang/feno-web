<script>
import { El, Tag, String, Viewer, Comment, Attr, Tab, CodeBox, Func, Mark, Key, Fun } from '@/components/Code/index'
import { Doc, Head, Style, Dmeta } from '@/components/Code/Instances/index'
import { Title, Subtitle, Alert } from '@/components/Tools/index'
import Screens from '@/components/screens.vue';

const anchorJS = require('anchor-js');

export default {
    components: {
        El, Tag, String, Viewer, Comment, Attr, Tab, CodeBox, Func, Mark, Key, Fun,
        Doc, Head, Style, Dmeta,
        Title, Subtitle, Alert
    },
    mixins: [Screens]
}

</script>