
{/*}import {graphql, useStaticQuery} from "gatsby";
import {convertToBgImage} from "gbimage";
import {backgroundImage123} from "gatsby-background-image";
const GbiBridged = () => {
const { backgroundImage123 } = useStaticQuery(
                graphql`
                query {

                    backgroundImage123: file(relativePath: {eq: "Hero.png"}) {
                        id
                        childImageSharp {
                          gatsbyImageData(width: 2000, quality: 50, WebOptions: {quality: 70})
                        }
                      }
                }
                
                `
            )




const image = getImage(backgroundImage123)
const bgImage = convertToBgImage(image)
return(
    <BackgroundImage
    Tag="section"
    {...bgImage}
    preserveStackingContext
    >
        Test
        </BackgroundImage>
)
}
export default GbiBridged
*/}