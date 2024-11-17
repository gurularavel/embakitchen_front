import { BlogDetails } from '~ek/components'
import type { BlogEntry, Language } from '~ek/types'
import { transformToUiData } from '~ek/utils'

const mockBlogPost: BlogEntry<Language> = {
  id: 16,
  title: {
    en: 'Kitchen Furniture Dimensions: Standard or Custom?',
    az: 'Mətbəx Mebeli Ölçüləri. Standart yoxsa Fərdi?',
    ru: 'Размеры кухонной мебели: стандарт или индивидуаль?',
  },
  slug: {
    en: 'kitchen-furniture-dimensions:-standard-or-custom?',
    az: 'mətbəx-mebeli-ölçüləri.-standart-yoxsa-fərdi?',
    ru: 'размеры-кухонной-мебели:-стандарт-или-индивидуаль?',
  },
  content: {
    en: '<p>Determining the dimensions of kitchen cabinets is important for both the aesthetic appearance and functionality of the kitchen. These dimensions can vary depending on the shape of the kitchen, your needs, and your preferences. However, there are some basic rules you should consider when determining kitchen cabinet dimensions. These rules will help your kitchen look more spacious, neat, and functional.</p>',
    az: '<p>Mətbəx dolabı ölçülərinin müəyyən edilməsi mətbəxin estetik görsənməsi və funksionallığı baxımından vacibdir. Bu ölçülər, mətbəxin formasına, ehtiyaclarınıza və seçimlərinizə görə dəyişə bilər. Ancaq, mətbəx dolabı ölçülərini müəyyən edərkən nəzərə almalı olduğunuz bəzi əsas qaydalar var. Bu qaydalar, mətbəxinizin daha geniş, səliqəli və funksional görsənməsinə imkan verəcəkdir.</p>',
    ru: '<p>Определение размеров кухонных шкафов важно как для эстетического вида кухни, так и для ее функциональности. Эти размеры могут варьироваться в зависимости от формы кухни, ваших потребностей и предпочтений. Однако существуют некоторые основные правила, которые следует учитывать при определении размеров кухонных шкафов. Эти правила помогут сделать вашу кухню более просторной, аккуратной и функциональной.</p><p>&nbsp;</p>',
  },
  content2: {
    en: '1. Preparing a Plan According to Shape and Size. \r\n\r\nWhen planning a kitchen, you should consider all the spaces, walls, windows, doors, electrical outlets, water supply, and ventilation system in your kitchen. By doing so, you can adjust the dimensions of your kitchen cabinets accordingly and avoid any issues in your kitchen. Whether your kitchen is L-shaped, U-shaped, between two walls, or with an island, it will affect the placement and dimensions of the cabinets. You can note the measurements of your kitchen and form an initial impression on paper.\r\n\r\n2. Ensuring Adequate Workspace. \r\n\r\nWhen determining the dimensions of kitchen cabinets, you need to consider the distances between the countertop, stove, and refrigerator. For example, the distance between the countertop and the kitchen island should be at least 60 cm. Also, the height of the kitchen cabinets is important. The height of the kitchen cabinets should be positioned appropriately between the countertop and the ceiling. If the height of the kitchen cabinets is too high, it will be difficult to reach the upper shelves. If it is too low, it will create a cramped atmosphere in the kitchen.\r\n\r\n3. Choosing Cabinets that Match the Style. \r\n\r\nNo matter how good the dimensions of your kitchen cabinets are, if they do not match the style of your kitchen, you will not achieve the desired look in your kitchen. Kitchen furniture materials, doors, and handles will affect the overall ambiance and decor of your kitchen. Make sure the cabinets match the walls, floor, countertop, and other accessories in your kitchen. Additionally, do not overlook details like the lighting, handles, and hinges of the cabinets. For example, for a modern kitchen, you can choose white or gray, glossy or matte surfaces, plain or geometric patterned kitchen cabinets. For a classic kitchen, you might prefer wooden or pastel-colored cabinets with patterned doors and handles.\r\n\r\nYou might be wondering, "Which door is better for the kitchen cabinet?" Currently, membrane, lacquer, acrylic, and MDF cabinet doors are the most preferred. You can choose from these types of doors according to your taste and budget.\r\n\r\nDetermine what you will store in the cabinets, which items you will use frequently, and which items you want to keep within easy reach. No matter how spacious your kitchen cabinets are, if you cannot use the spaces inside the cabinets efficiently, you may face space problems in your kitchen. Therefore, you can use accessories such as drawers, shelves, and baskets inside the cabinets to make more efficient use of space.',
    az: '1. Formaya və ölçüyə uyğun planın hazırlanması. \r\n\r\nMətbəx planlaması edərkən, mətbəxinizdəki bütün sahələri, divarları, pəncərələri, qapıları, elektrik yuvaları, su təchizatını və havalandırma sistemini nəzərə almalısınız. Belə edərək, mətbəx dolabı ölçülərinizi bunlara uyğun tənzimləyə bilər və mətbəxinizdə hər hansı bir problem yaşamazsınız. Mətbəxinizin L şəklində, U şəklində, iki divar arası və ya adalı olması, dolabların yerləşməsinə və ölçülərinə təsir göstərəcəkdir. Mətbəxinizin ölçülərini qeyd edə və kağız üzərində ilkin təsəvvürü formalaşdıra bilərsiniz.\r\n\r\n2. Yetərli çalışma sahəsinin olması. \r\n\r\nMətbəx dolabı ölçülərini müəyyən edərkən, dəzgah, soba və soyuducu arasındakı aralıqları nəzərə almaq lazımdır. Məsələn, dolab dəzgahı ilə mətbəx adası arasındakı məsafə ən azı 60 sm olmalıdır. Həmçinin, mətbəx dolaplarının hündürlüyü də vacibdir. Mətbəx dolablarının hündürlüyü, dəzgah ilə tavan arasına uyğun şəkildə yerləşdirilməlidir. Mətbəx dolablarının hündürlüyü çox olarsa, yuxarı rəflərə çatmaq çətinləşər. Az olarsa, mətbəxdə sıxıcı bir atmosfer yaranar.\r\n\r\n3. Tərzə uyğun dolabların seçilməsi. Mətbəx dolabı ölçüləriniz nə qədər yaxşı olursa olsun, əgər  mətbəxinizin tərzinə uyğun deyilsə, mətbəxinizdə istədiyiniz görünüşü əldə edə bilməyəcəksiniz. **Mətbəx mebeli materialları**, qapaqları və qulpları və s. mətbəxinizin ümumi abu-havasına və dekorasiyaya təsir göstərəcəkdir. Dolabların mətbəxinizin divar, döşəmə, dəzgah və digər aksesuarları ilə uyumlu olmasına diqqət edin. Həmçinin, dolabların işıqlandırılması, dəstəkləri və məntəşələri (petlələri) kimi detalları da nəzərdən qaçırmayın. Məsələn, müasir bir mətbəx üçün ağ və ya boz rəngli, parlaq və ya mat səthli, düz və ya geometrik naxışlı mətbəx dolabları seçə bilərsiniz. Klassik mətbəx üçün isə taxta və ya pastel rəngli, naxışlı qapaq və dəstəkləri olan mətbəx mebellərinə üstünlük verə bilərsiniz.\r\n\r\n"Mətbəx dolabında hansı qapı daha yaxşıdır?" deyə düşünə bilərsiniz. Hazırda daha çox membran, lake, akrilik və MDF dolab qapılarına üstünlük verilir. Bu qapı növlərindən zövqünüzə və büdcənizə uyğun seçim edə bilərsiniz.\r\n\r\nFunksionallığı və ehtiyacları nəzərə alaraq yerləşdirmə. Dolabların içində nəyi saxlayacağınızı, hansı əşyaları tez-tez istifadə edəcəyinizi və hansı əşyaları əlinizin altında saxlamaq istəyəcəyinizi müəyyənləşdirin. Mətbəx dolablarınız nə qədər geniş olursa olsun, əgər dolablarınızın içindəki sahələri səmərəli istifadə edə bilmirsinizsə, mətbəxinizdə yer problemi ilə qarşılaşa bilərsiniz. Bu səbəbdən, dolabların içərisinə çəkməcə, rəf, səbət kimi aksesuarları əlavə edərək daha səmərəli şəkildə istifadə edə bilərsiniz.\r\n\r\nFunksionallığı və ehtiyacları nəzərə alaraq yerləşdirmə. Dolabların içində nəyi saxlayacağınızı, hansı əşyaları tez-tez istifadə edəcəyinizi və hansı əşyaları əlinizin altında saxlamaq istəyəcəyinizi müəyyənləşdirin. Mətbəx dolablarınız nə qədər geniş olursa olsun, əgər dolablarınızın içindəki sahələri səmərəli istifadə edə bilmirsinizsə, mətbəxinizdə yer problemi ilə qarşılaşa bilərsiniz. Bu səbəbdən, dolabların içərisinə çəkməcə, rəf, səbət kimi aksesuarları əlavə edərək daha səmərəli şəkildə istifadə edə bilərsiniz.',
    ru: '1. Подготовка плана в соответствии с формой и размером. \r\n\r\nПри планировании кухни необходимо учитывать все пространства, стены, окна, двери, электрические розетки, водоснабжение и вентиляционную систему на вашей кухне. Таким образом, вы сможете соответственно настроить размеры кухонных шкафов и избежать любых проблем на кухне. Форма вашей кухни - L-образная, U-образная, между двумя стенами или с островом - будет влиять на размещение и размеры шкафов. Вы можете записать размеры вашей кухни и сформировать первоначальное представление на бумаге.\r\n\r\n2. Обеспечение достаточного рабочего пространства. \r\n\r\nПри определении размеров кухонных шкафов необходимо учитывать расстояния между столешницей, плитой и холодильником. Например, расстояние между столешницей и кухонным островом должно быть не менее 60 см. Также важна высота кухонных шкафов. Высота кухонных шкафов должна быть расположена соответствующим образом между столешницей и потолком. Если высота кухонных шкафов слишком велика, будет трудно дотянуться до верхних полок. Если она слишком низкая, на кухне будет создана тесная атмосфера.\r\n\r\n3. Выбор шкафов, соответствующих стилю. \r\n\r\nКак бы хороши ни были размеры ваших кухонных шкафов, если они не соответствуют стилю вашей кухни, вы не достигнете желаемого вида на вашей кухне. Материалы кухонной мебели, двери и ручки будут влиять на общее настроение и декор вашей кухни. Убедитесь, что шкафы соответствуют стенам, полу, столешнице и другим аксессуарам на вашей кухне. Кроме того, не забывайте про детали, такие как освещение, ручки и петли шкафов. Например, для современной кухни вы можете выбрать белые или серые, глянцевые или матовые поверхности, простые или с геометрическим рисунком кухонные шкафы. Для классической кухни можно предпочесть деревянные или пастельные шкафы с узорчатыми дверцами и ручками.\r\n\r\nВы можете задуматься: «Какая дверь лучше для кухонного шкафа?». В настоящее время наибольшей популярностью пользуются дверцы шкафов из мембраны, лака, акрила и МДФ. Вы можете выбрать эти типы дверей в соответствии с вашими предпочтениями и бюджетом.\r\n\r\nОпределите, что вы будете хранить в шкафах, какие предметы вы будете использовать часто и какие предметы хотите держать под рукой. Независимо от того, насколько просторны ваши кухонные шкафы, если вы не сможете эффективно использовать пространство внутри шкафов, у вас могут возникнуть проблемы с местом на кухне. Поэтому можно использовать аксессуары, такие как выдвижные ящики, полки и корзины внутри шкафов, чтобы более эффективно использовать пространство.',
  },
  image: [
    {
      name: '0L1A5736',
      file_name: '0L1A5736.JPG',
      uuid: '91929660-d21d-45f4-bf57-ba4843d608c8',
      preview_url: '',
      original_url: 'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
      order: 1,
      custom_properties: [],
      extension: 'JPG',
      size: 7043050,
    },
  ],
  image2: [
    {
      name: 'metbex_olculer',
      file_name: 'metbex_olculer.jpeg',
      uuid: '0d24b9e7-8258-4b3a-a185-2b599e372b86',
      preview_url: '',
      original_url:
        'https://embakitchen.kvadrat.az/storage/159/metbex_olculer.jpeg',
      order: 2,
      custom_properties: [],
      extension: 'jpeg',
      size: 139127,
    },
  ],
  status: true,
}

export default async function BlogDetailsPage({
  params: { locale, slug },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  // const response = await fetch(
  //   `https://embakitchen.kvadrat.az/api/posts/${slug}`,
  // )
  // const { data: selectedBlogData } = await response.json()
  const blogDetailsProps = transformToUiData(mockBlogPost, locale) as BlogEntry

  return <BlogDetails {...blogDetailsProps} />
}
