import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@src/components/Button'
import ToolBar from '@src/components/ToolBar'
import styles from './Chapter.module.scss'
import classNamesBind from 'classnames/bind'
import ChapterNavigation from '@src/components/ChapterNavigation'
const cx = classNamesBind.bind(styles)

const Chapter = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <>
            <ToolBar onClickListButton={() => setShowNav(true)} />
            <div className={cx('reading-page')}>
                <div className="wrapper">
                    <div className={cx("content-container")}>
                        <div className={cx("page-head")}>
                            <div className={cx("novel-title")}><Link to={'#'}>Sổ tay công lược nữ thần</Link></div>
                            <div className={cx("chapter-title")}>
                                <span className={cx("chapter-number")}>Chương 1.</span>
                                Người ở rễ ôn gia
                            </div>

                            <div className={cx("controls-btn")}>
                                <Button btnType={'gray'} disabled title='Chương trước' />
                                <Button btnType={'gray'} title='Chương Sau' />
                            </div>
                        </div>
                    </div>
                    <div className={cx("content-container")}>
                        <div className={cx("novel-content")}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta non quo at culpa repellendus quasi, est commodi nostrum animi minima, dignissimos cum numquam suscipit neque rerum dolorem! Repellendus, laudantium earum.
                            Quo quos odio iusto cupiditate nobis saepe consectetur ratione delectus facilis. Fugit numquam, modi obcaecati molestiae dolorem ipsum eligendi repellendus at commodi. Quasi aut sequi facere accusamus provident praesentium odit?
                            Illo deserunt eligendi reiciendis. Culpa, iste, sit et, ullam voluptas optio odio explicabo quisquam quas ipsum tenetur quibusdam doloremque blanditiis saepe? Repellat incidunt quos aspernatur, in atque voluptas voluptates optio!
                            Rerum possimus dolorem beatae, repellat voluptatem sint illo harum itaque natus consequuntur laudantium laboriosam deserunt sunt dolorum hic molestiae minus porro. Impedit numquam ut exercitationem quibusdam blanditiis, deleniti quia corrupti.
                            Maxime sapiente sit debitis hic et facere illum repellendus. Ex sint fuga voluptas nihil, beatae pariatur inventore laudantium reiciendis itaque nam modi enim rerum repudiandae, autem accusantium culpa, magni nulla?
                            Atque dolore possimus perspiciatis reiciendis adipisci sequi, et voluptatem facilis cum sit nemo maiores sunt consequatur modi. Molestiae neque earum, quos totam magni doloremque cum repellat temporibus necessitatibus exercitationem aliquam?
                            Assumenda maiores perferendis quaerat incidunt illo molestiae neque impedit provident deserunt consequuntur, molestias, velit eius cupiditate. Sit, numquam illum? Eligendi quam rerum molestias quod neque culpa voluptas soluta dolorum quos!
                            Eligendi ratione accusantium rem, adipisci architecto quasi vero dolorem molestias culpa mollitia atque aut asperiores cumque porro quibusdam repudiandae explicabo recusandae possimus numquam? Dicta commodi tempore placeat saepe illum recusandae!
                            Voluptatum, quidem consectetur. Quasi possimus, nemo suscipit eligendi amet magni facilis sed aliquid eos vitae voluptatibus tenetur quod quo ipsam vero perferendis laboriosam facere totam, sunt voluptate consectetur ab ad!
                            Est optio facilis mollitia pariatur beatae. Veritatis assumenda deleniti nulla officiis quam ad eius iste sit maiores ea temporibus nobis, veniam asperiores reiciendis voluptatum laboriosam quae similique obcaecati! Praesentium, molestias?
                            Inventore eos eveniet corporis aut architecto culpa ullam at quod tenetur praesentium totam id rerum aliquam illo iste esse pariatur, perferendis numquam. A hic laudantium ea esse culpa, molestias soluta!
                            Aliquid aperiam aliquam nesciunt quisquam numquam suscipit cumque deleniti praesentium commodi iste vel reiciendis officia quis quam dolorum molestiae quod fugiat nemo necessitatibus adipisci voluptate, impedit quia ipsa. Odit, magni.
                            Maxime ducimus ipsum unde? Ullam ab alias aliquam soluta exercitationem atque iste. Amet repudiandae totam porro doloremque consectetur, quaerat rem temporibus deserunt quasi! Aperiam, delectus vero eligendi rem dignissimos nostrum?
                            Vero maxime, iste quasi magni in sed! Voluptatum consequuntur, nobis facilis ipsum asperiores atque commodi illo itaque quidem blanditiis quibusdam inventore fugit nesciunt harum fugiat quae quis id dolor animi.
                            Adipisci, fuga odio distinctio cumque ex omnis voluptate sed incidunt eum. Enim dolore natus odio porro, error cupiditate aliquam, nostrum excepturi impedit ad possimus esse quae illum sunt voluptas doloribus!
                            Officiis amet in deserunt pariatur nobis provident necessitatibus vel quia laborum totam voluptas ex at, perspiciatis, sapiente itaque sunt! Maxime eligendi rerum officiis perspiciatis consequuntur veritatis exercitationem quisquam velit libero?
                            Illum sunt alias, distinctio omnis recusandae dolor quam. Vitae, neque vero voluptatem sequi, odio facere delectus maiores error temporibus recusandae nam tempora eius doloribus dolore dolor praesentium officiis omnis aliquid.
                            Ducimus omnis ipsa vitae veritatis cupiditate quas cumque aliquid nam adipisci recusandae neque impedit, quidem officia amet, ab optio esse explicabo tempore, odio unde laboriosam! Aliquam mollitia et exercitationem nemo.
                            Molestiae deleniti dolor, voluptas, eligendi unde nesciunt illo ex tempora molestias doloremque, sunt recusandae optio maxime eos eum. Iste excepturi voluptatibus quod laudantium dolorum iure, vitae sint modi quam illo?
                            Expedita, corporis minima? Esse quasi consequuntur nam nemo quo itaque voluptas in doloremque cum ducimus quidem suscipit, tempora cumque, neque culpa deserunt molestiae inventore quae, asperiores omnis similique magni animi.
                            Sunt eum illum sint non? Laudantium, debitis alias. Sequi sed excepturi, nesciunt, id eveniet maxime doloremque, illum dolore ut nulla fugiat. Quasi neque excepturi maiores harum, eaque incidunt officiis dolorum?
                            Enim excepturi adipisci iure alias fugiat, eaque est cupiditate nobis nostrum soluta id mollitia ratione sunt, iste debitis voluptates. Adipisci optio omnis repellat sunt accusantium et similique aperiam cupiditate nisi?
                            Saepe modi qui voluptatem unde alias eveniet nesciunt dolores soluta libero cumque vel maxime quos ipsa officia, ea ut? Veniam nobis repellat numquam voluptate cupiditate alias tempora aperiam, quos expedita.
                            Iure ullam laboriosam repellat, in reprehenderit dolores officiis unde perspiciatis quod eligendi ea dicta voluptas quidem fugiat nam quam vel earum sed deserunt tempora commodi. Obcaecati necessitatibus nemo architecto suscipit?
                            Necessitatibus inventore porro excepturi praesentium? Quibusdam eius libero autem, illo quis mollitia sapiente fuga saepe. Assumenda voluptatum exercitationem, dicta ea ipsum quaerat aliquam dignissimos veniam harum dolore sed vero perferendis!
                            Consectetur fuga earum maxime illo aspernatur, expedita a consequuntur quaerat nemo dolor harum, esse alias ab eligendi similique omnis recusandae debitis sit perspiciatis distinctio. Soluta molestiae atque incidunt quia ad.
                            Tenetur molestiae, commodi doloremque delectus omnis repellat iure voluptatibus explicabo, exercitationem sunt soluta similique tempora inventore debitis eum obcaecati reiciendis cum quibusdam incidunt quae aspernatur, necessitatibus nulla? Accusamus, laborum obcaecati.
                            Atque quo doloribus ad nulla aperiam tenetur repellat eaque, error in assumenda facere quos corporis. Tempora voluptate, consectetur repellendus excepturi aperiam dignissimos, consequatur reprehenderit necessitatibus quia eaque autem nesciunt quidem.
                            Aperiam dicta dignissimos, eos nihil minima necessitatibus at praesentium consequuntur sapiente illo ducimus iure, et explicabo aliquam consectetur, quibusdam dolor temporibus atque laudantium deserunt illum non tempore rem assumenda. Necessitatibus.
                            Ratione veniam molestiae ut molestias vitae ipsam eligendi rem dolorum vel. Quis deleniti libero nostrum velit ipsum id tempora quo voluptatibus! Natus earum optio dignissimos temporibus ab rerum explicabo magnam.
                            Voluptatibus maiores et cupiditate, voluptatem, perspiciatis, distinctio recusandae voluptate tempora ab consectetur in corrupti architecto omnis reiciendis sed unde saepe. Laudantium vel possimus nihil quia accusamus recusandae itaque non dignissimos.
                            Nisi unde ab dolorem alias, molestias assumenda facilis aspernatur ea itaque quod dolor nostrum. Aliquam, quos dolores a, architecto eos sit ea veritatis earum doloremque deserunt totam illo ex qui?
                            Nesciunt quod deserunt quibusdam error temporibus repudiandae libero minima illum? Consectetur, est reprehenderit fuga sunt id maxime illum enim provident vel earum ex possimus. Vel pariatur nihil autem veritatis deleniti.
                            Soluta expedita ipsum voluptates libero ducimus? Libero pariatur illo, provident eum odit explicabo, beatae impedit totam repudiandae dicta dolor eius optio cum officia numquam eaque facere reprehenderit mollitia sequi nam.
                            Commodi reprehenderit fuga accusantium repudiandae ipsum illum ea provident doloremque quas! Alias enim voluptatibus, velit neque voluptates a laborum cupiditate delectus eos commodi recusandae provident natus, possimus minus nesciunt quidem!
                            Quisquam hic, vitae aliquam in aperiam architecto maiores odio voluptate placeat necessitatibus, alias nulla obcaecati quo. Minus illo impedit perspiciatis perferendis modi veritatis, facilis molestias alias odio dolore ratione voluptatum.
                            At voluptas commodi ea sed corporis qui dolores cum sint, reprehenderit non ratione obcaecati facere quibusdam odio, maiores iure iste quo nisi id ullam repudiandae ex? Animi amet debitis molestias.
                            Error natus neque voluptatem saepe amet reiciendis cumque, vitae magnam repellat, numquam repellendus? Velit a recusandae culpa vero esse, expedita unde praesentium nobis rerum ipsum magnam obcaecati voluptatum ullam voluptas.
                            Tempora ipsum expedita voluptas minus ratione harum accusantium dolorem fugit neque minima iusto facere eveniet consequatur nobis, quod aspernatur hic culpa pariatur voluptatem et cum perspiciatis repellendus! Molestiae, odit dolore.
                            Eaque unde itaque qui tempora, corrupti cumque adipisci a doloribus excepturi nulla molestias reiciendis. Corporis, provident porro nobis, fugit fugiat nulla minus non rem optio eveniet ducimus ab iusto quidem.
                            Modi aspernatur voluptates omnis esse, rerum iste quaerat laborum quod eveniet iusto repudiandae officiis quos doloremque, magnam veritatis voluptatum in impedit ab sunt, rem unde? Cupiditate excepturi sint ab perspiciatis?
                            Sit doloribus accusamus perspiciatis quam eos atque esse expedita doloremque ducimus magnam. Ab deleniti numquam delectus! Nam explicabo repellat ullam expedita eligendi quaerat praesentium illum possimus impedit perferendis, vel corrupti?
                            Omnis eos qui eius, repudiandae nesciunt minus nostrum vitae perspiciatis! Placeat repellat cum tempora? Vero tempore architecto sunt velit voluptatem earum doloribus, inventore placeat iure corporis similique. Ipsum, non unde.
                            Fugit inventore labore qui aspernatur doloremque, magnam dolorum incidunt perspiciatis nisi dicta voluptate atque sed, amet aliquam! Asperiores, animi, nisi cumque consequuntur voluptatum ea, in minima hic dolor pariatur maxime.
                            Doloribus maxime saepe vitae cumque, fugiat minus quam fugit atque, numquam sequi optio adipisci voluptate hic eos exercitationem non id sapiente neque repellat minima quidem. In qui doloribus nam asperiores.
                            Delectus sit repellat, animi perferendis vero dolore. Quia dolores eos ipsum, dignissimos laudantium cupiditate quisquam blanditiis atque! Saepe, possimus nulla, quas natus earum, voluptatum atque mollitia alias quos vel nisi?
                            Sequi, ad laboriosam rem explicabo possimus, a rerum minima, libero aliquid enim unde at dignissimos incidunt doloribus natus fuga. In, perferendis! Aspernatur fugit saepe laudantium quae odit ipsam eaque. Non!
                            Quis eius laborum iste vel veniam iusto ipsum ut ipsam eum, consectetur vitae illum distinctio labore consequuntur ipsa blanditiis. Tenetur illo quisquam obcaecati, quidem quo ut quasi officia dolorum minima.
                            Accusamus sed maxime quaerat animi distinctio facere quis nesciunt, odit hic voluptate earum harum. Beatae nemo ad explicabo consectetur eius, neque sunt. Eveniet officiis, in ipsa quaerat quasi non exercitationem!
                            Reprehenderit molestiae quidem qui velit esse quibusdam vitae consequuntur suscipit veritatis, beatae totam omnis officiis dicta non repudiandae ducimus vel molestias? Minus soluta nulla cumque veniam distinctio tempora dolorem voluptate.
                            Adipisci saepe voluptatum fuga totam amet. Nulla amet hic inventore voluptatibus nobis. Enim facere assumenda labore ut in laboriosam recusandae! Quis officia ex tempore porro ut dignissimos labore placeat sint.
                            Eum doloribus non earum cum consectetur, recusandae dolor modi dolore suscipit in voluptatibus perferendis minus nulla rem atque quaerat quae quisquam excepturi repellat! Pariatur aperiam odio modi reprehenderit quo qui!
                            Non minima neque numquam! Reprehenderit cumque assumenda mollitia eius tempore animi error qui provident fugiat ex temporibus pariatur recusandae quo, minima, sit suscipit perspiciatis corrupti fuga numquam quasi totam! Ipsum!
                            Vitae mollitia minus ipsa eum! Illum iusto, quaerat nobis provident architecto earum neque consectetur quasi cum recusandae placeat quam beatae quod unde perferendis quidem doloribus sit. Repellendus, deserunt nisi. Reiciendis?
                            Reiciendis repudiandae quos delectus, dolorum autem at obcaecati laudantium. Culpa amet dignissimos exercitationem harum quidem suscipit iusto nesciunt, asperiores, dolorum sunt laborum delectus illum eos magni, beatae doloribus dicta! Saepe!
                            Expedita cumque nisi officia eveniet harum sapiente illo at explicabo tempore fuga. Non, aut quidem ex officiis omnis dolorem consectetur vitae doloremque cum, nostrum repellendus dicta corrupti nesciunt tempora eius!
                            Aliquid pariatur facere rem ducimus corrupti nisi atque sit saepe inventore est nostrum sapiente, vel vitae mollitia nulla, officiis veritatis, itaque accusamus sed soluta cupiditate. Et assumenda odio in vitae!
                            Voluptatum eos beatae soluta accusamus quo illum dolores incidunt alias aspernatur nisi dolore deserunt excepturi magni nihil illo sed nesciunt quam a ipsam, molestias similique pariatur! Veritatis modi iure aperiam.
                            Quisquam explicabo nihil dicta corporis nostrum. Quod alias est ipsum labore, nobis quae ratione velit omnis vitae a, quisquam exercitationem, temporibus blanditiis accusamus esse iusto quibusdam soluta facere sint magnam.
                            Cupiditate, repellendus. Quis ratione minima tenetur, quasi quibusdam repellendus doloremque laborum consequatur eius fuga earum ullam ab deserunt suscipit incidunt sit consectetur ipsam, obcaecati nemo modi blanditiis! Dolores, odio alias.
                        </div>
                    </div>
                    <div className={cx("content-container")}>
                        <div className={cx("controls-btn")}>
                            <Button btnType={'gray'} disabled title='Chương trước' />
                            <Button btnType={'gray'} title='Chương Sau' />
                        </div>
                    </div>
                </div>
            </div>
            <ChapterNavigation show={showNav} onClickOutside={() => setShowNav(false)} />
        </>

    )
}

export default Chapter
