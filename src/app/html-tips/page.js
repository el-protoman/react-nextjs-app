import Head
    from "next/head";
import styles from './styles.css'
import Link from "next/link";

export default function Page() {
    return <div>
        <Head><meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./styles.css" type="text/css" />
            <title>HTML/CSS Cheatsheet</title>
        </Head>
        <h1 className={styles.h1}>Hello, Next.js!</h1>
        <Link href="/">Home Page</Link>


        <body className={styles.body}>
            <div>
                <table className={styles.table}>
                    <h1 className={styles.h1}>HTML Tags</h1>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Tag</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        <tr>
                            <td>&lt;table&gt;</td>
                            <td>Table</td>
                            <td>The wrapper element for all HTML tables.</td>
                        </tr>
                        <tr>
                            <td>&lt;thead&gt;</td>
                            <td>Table Head</td>
                            <td>The set of rows defining the column headers in a table.</td>
                        </tr>
                        <tr>
                            <td>&lt;tbody&gt;</td>
                            <td>Table Body</td>
                            <td>The set of rows containing actual table data.</td>
                        </tr>
                        <tr>
                            <td>&lt;th&gt;</td>
                            <td>Table Head Column</td>
                            <td>The table header column containing actual table data.</td>
                        </tr>
                        <tr>
                            <td>&lt;tr&gt;</td>
                            <td>Table Row</td>
                            <td>The table row container.</td>
                        </tr>
                        <tr>
                            <td>&lt;td&gt;</td>
                            <td>Table Data</td>
                            <td>The table row container.</td>
                        </tr>
                        <tr>
                            <td>&lt;tfoot&gt;</td>
                            <td>Table Foot</td>
                            <td>The set of rows defining the footer in a table.</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <h1>CSS Tags / Selectors</h1>
                    <thead>
                        <tr>
                            <th>Tag</th>
                            <th>Name</th>
                            <th>Description/Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>index.html file</td>
                            <td>Reference CSS Stylesheet</td>
                            <td> &lt;link href=&quot;styles/style.css&quot; rel=&quot;stylesheet&quot; /&gt;
                            </td>
                        </tr>
                        <tr>
                            <td>Element selector</td>
                            <td>All HTML elements of the specified type.</td>
                            <td>p select &lt;p&gt;</td>
                        </tr>
                        <tr>
                            <td>ID selector (#)</td>
                            <td>The element on the page with the specified ID.</td>
                            <td>#my-id selects &lt;p id=&quot;my-id&quot;&gt; or &lt;a id=&quot;my-id&quot;&gt;</td>
                        </tr>
                        <tr>
                            <td>Class selector(.)</td>
                            <td>The element on the page with the specified class. Multiple instances of the sameclass can appear
                                on
                                a page.</td>
                            <td>.my-class selects &lt;p class=&quot;my-class&quot;&gt; or &lt;a class=&quot;my-class&quot;&gt;</td>
                        </tr>
                        <tr>
                            <td>Attribute selector ([])</td>
                            <td>the element on the page with the specified attribute</td>
                            <td>img[src] selects &lt;img src=&quot;myimage.png&quot;&gt; but not &lt;img&gt;</td>
                        </tr>
                        <tr>
                            <td>Psuedo-class selector (:)</td>
                            <td>The specified element(s) but only when in the specified state. (for example, when a cursor
                                hovers over a link)</td>
                            <td>a:hover selects &lt;a&gt; but only when the mouse pointer is hovering over the link
                                <br></br>*Hint: use
                                cursor:pointer prop and value to change cursor, but only on &lt;a&gt; declarations
                                <br></br>*Extra Hint The ordering of link state pseudo-class rules is important to reveal the
                                proper
                                information. When a user hovers and then clicks a link, those styles should always override the
                                static styling surrounding a user’s history with the link (unvisited :link and :visited). The
                                proper order of these rules is:

                                :link
                                :visited
                                :hover
                                :active
                            </td>
                        </tr>
                        <tr>
                            <td>Selecting Multiple elements</td>
                            <td>You can also select multiple elements and apply a single ruleset to all of them. Separate
                                multiple selectors by commas. Follow selectors with declaration of properties and property
                                value.
                            </td>
                            <td>p,
                                li,
                                h1,
                                #my-id,
                                .my-class,
                                img[src],
                                a:hover
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <h1>CSS Attributes</h1>
                    <thead>
                        <tr>
                            <th>Attribute/Value</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>align-content</td>
                            <td>Display</td>
                            <td>Aligns items in a flex container along flex lines.</td>
                        </tr>
                        <tr>
                            <td>flex</td>
                            <td>Display</td>
                            <td>Specifies the width of the flexible items.</td>
                        </tr>
                        <tr>
                            <td>flex-direction</td>
                            <td>Display</td>
                            <td>Specifies the direction for all the flexible items to align.</td>
                        </tr>
                        <tr>
                            <td>flex-wrap</td>
                            <td>Display</td>
                            <td>Specifies how flexible items wrap inside the container.</td>
                        </tr>
                        <tr>
                            <td>float</td>
                            <td>Display</td>
                            <td>Sets how an element is positioned relative to other elements.</td>
                        </tr>
                        <tr>
                            <td>block</td>
                            <td>Display</td>
                            <td>Block level elements by default take up as much space as they can, and they cannot be placed on
                                the same horizontal line with any other display modes, include other block elements. (Exception:
                                unless they are floated)
                                With block elements, you gain the ability to alter the element’s width and height to your
                                liking.</td>
                        </tr>
                        <tr>
                            <td>inline-block</td>
                            <td>Display</td>
                            <td>The inline mode wraps many HTML elements tighty around them and is the defaults for all elements
                                that are not specified with any other display values. Elements can be placed side by side on the
                                same line as inline elements. Think about the &lt;strong&gt; tag that bolds elements, the
                                &lt;em&gt; tag that creates italics and &lt;a&gt; tags that allow you to link to other web
                                pages. These are all examples of inline elements. You will not be able to change an inline
                                element’s width and height.</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>Display</td>
                            <td>The inline mode wraps many HTML elements tighty around them and is the defaults for all elements
                                that are not specified with any other display values. Elements can be placed side by side on the
                                same line as inline elements. Think about the &lt;strong&gt; tag that bolds elements, the
                                &lt;em&gt; tag
                                that creates italics and &lt;a&gt; tags that allow you to link to other web pages. These are
                                all examples of inline elements. You will not be able to change an inline element’s
                                width and height.</td>
                        </tr>
                        <tr>
                            <td>none</td>
                            <td>Display</td>
                            <td>Display none hides the element from the website and it will not be shown visually. This is very
                                useful for CSS Dropdown menus where additional options appear when you hover on navigation
                                menus. The rationale is that elements are set to a display value of none initially, and the
                                display value is changed to block on hover.</td>
                        </tr>
                        <tr>
                            <td>px</td>
                            <td>Width & Height</td>
                            <td>Pixels</td>
                        </tr>
                        <tr>
                            <td>em</td>
                            <td>Width & Height</td>
                            <td>A unit of measurement, where 1 em = current font size.</td>
                        </tr>
                        <tr>
                            <td>rem</td>
                            <td>Width & Height</td>
                            <td>Root em. Same measurement as em, but makes life much easier without the inheritance problem</td>
                        </tr>
                        <tr>
                            <td>%</td>
                            <td>Width & Height</td>
                            <td>Percentages</td>
                        </tr>
                        <tr>
                            <td>auto</td>
                            <td>Width & Height</td>
                            <td>make sure images fit tightly and snugly into available space</td>
                        </tr>
                        <tr>
                            <td>margin</td>
                            <td>Margin & Padding</td>
                            <td>4 numbers shorthand refers to Top, Right, Bottom, Left. 3 numbers shorthand refers to Top, Left
                                and Right, Bottom. 2 numbers shorthand refers to Top and Bottom, Left and Right.</td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>Clearing Floats</td>
                            <td>The Clear property takes in 3 values. left, right or both. As you might have suspected,
                                clear:left; simply clears any floats on the left side, clear:right; clears floats on the right
                                side while clear:both; ensures that all floats elements are cleared.</td>
                        </tr>
                        <tr>
                            <td>overflow:hidden</td>
                            <td>Clearing Floats</td>
                            <td>This method is great for ensuring the parent element does not collapse like in problem 2.
                                overflow:hidden; is set to the parent element to combat the problem.</td>
                        </tr>
                        <tr>
                            <td>clearfix</td>
                            <td>Clearing Floats</td>
                            <td>No doubt you will have heard of or seen clearfix in tutorials. It is also set to the parent
                                element to ensure float issues do not arise. The rationale behind the clearfix hack is to insert
                                some content (a period) after the parent element to force the parent element to self clear since
                                there is content after the floats.</td>
                        </tr>
                        <tr>
                            <td>Enter Next Here</td>
                            <td>Enter Text Here</td>
                            <td>Enter Text Here</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <h1>GIT Commands</h1>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>git init</td>
                            <td>Inicialize un nueva repositorio Git</td>
                        </tr>
                        <tr>
                            <td>git add &lt;archivo&gt;</td>
                            <td>Añade archivos al area de staging</td>
                        </tr>
                        <tr>
                            <td>git status</td>
                            <td>Compreuba el estado del area de staging, asi como el directorio del trabajo</td>
                        </tr>
                        <tr>
                            <td>git commit -m &quot;mensaje&quot;</td>
                            <td><strong>Confirma</strong>(commits/confirmaciones) archivos en el respositorio local y añade un
                                mensaje</td>
                        </tr>
                        <tr>
                            <td>git clone</td>
                            <td>Descarga el codigo existente desde un repositorio remoto</td>
                        </tr>
                        <tr>
                            <td>git branch</td>
                            <td>enumera todas las ramas locales en la maquina <br></br> <strong>-d</strong> elimina una rama
                                <br></br> <strong>-m</strong> cambia el nombre de la rama de trabajo actual</td>
                        </tr>
                        <tr>
                            <td>git checkout -b &lt;nombre-de-la-rama&gt;</td>
                            <td>cambia de la rama actual a otra</td>
                        </tr>
                        <tr>
                            <td>git push &lt;remote-repo-link&gt; &lt;nombre-de-la-rama&gt;</td>
                            <td>guarda todas las confirmaciones en el repositorio remoto</td>
                        </tr>
                        <tr>
                            <td>git pull &lt;remote-repo-link&gt;</td>
                            <td>Despliega todas las actualizaciones desde el repositorio remoto</td>
                        </tr>
                        <tr>
                            <td>git stash</td>
                            <td>Elimina temporalmente los cambios no confirmados</td>
                        </tr>
                        <tr>
                            <td>git remote set-url origin git://new.url.here</td>
                            <td>Instead of removing and re-adding a remote origin, change it with this command</td>
                        </tr>
                        <tr>
                            <td>git remote remove origin</td>
                            <td>Removes remote origin</td>
                        </tr>
                        <tr>
                            <td>git reset</td>
                            <td>Deshace los cambios en los archivos locales y restaura a la ultima confirmacion</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </div>
        ;
}