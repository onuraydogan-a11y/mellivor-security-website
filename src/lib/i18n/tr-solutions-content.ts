import type { SolutionPageContent } from "@/lib/solutions-content";

/**
 * Turkish mirror of src/lib/solutions-content.ts. Same keys (slugs),
 * same structure, professionally translated content — no generic
 * filler reused across entries, matching the English source's standard.
 */
export const trSolutionContent: Record<string, SolutionPageContent> = {
  "ai-security": {
    eyebrow: "AI ve Uygulama Riski",
    title: "AI Security",
    summary:
      "İşletmenizin zaten kullanıma sunduğu yapay zeka sistemlerini — modelleri, veri hatlarını ve arkasındaki verileri — güvence altına alın.",
    overview: [
      "Kurumsal yapay zeka benimseme hızı, güvenlik ekiplerinin buna yönelik kontroller geliştirme hızını geride bıraktı. Modeller hassas verilerle eğitiliyor, yeni API'ler üzerinden dışa açılıyor ve genellikle geleneksel yazılımlara uygulanan güvenlik önlemleri olmadan doğrudan müşteriye yönelik ürünlere gömülüyor.",
      "Mellivor AI Security, ortamınızda yapay zekanın nerede çalıştığına dair görünürlük sağlar ve onu güvence altına almanın tutarlı bir yolunu sunar; bunu yaparken de onu geliştiren ekipleri yavaşlatmaz.",
    ],
    whyItMatters: [
      "Açığa çıkan tek bir model veya sızdırılan bir eğitim veri kümesi; müşteri verilerini, fikri mülkiyeti ve düzenleyici konumu aynı anda riske atabilir — ve tipik bir ihlalin aksine, hasar fark edilmeden çok önce modelin davranışına işlenmiş olabilir.",
      "Yönetim kurulları ve düzenleyiciler yapay zeka yönetişimi hakkında doğrudan sorular sormaya başladı. Bunlara bir slayt sunumuyla değil, gerçek görünürlükle yanıt verebilmek hızla bir 'olsa iyi olur' değil, rekabetçi bir gereklilik haline geliyor.",
    ],
    challenge: [
      "Ekipler genelinde merkezi görünürlüğü olmayan gölge yapay zeka kullanımı",
      "Model eğitimi ve istemler yoluyla hassas veri açığa çıkması",
      "Yeni saldırı yüzeyi: prompt injection, model hırsızlığı, veri zehirlenmesi",
      "Yapay zeka sistemlerinin yayına alınmadan önce nasıl incelendiğine dair tutarlı bir politikanın olmaması",
    ],
    approach: [
      "Ortamınız genelinde yapay zeka modellerinin, veri hatlarının ve API'lerin keşfi",
      "Model ve veri açığa çıkmasına yönelik sürekli izleme",
      "Ekipler genelinde tutarlı şekilde uygulanan politika koruma önlemleri",
      "Yapay zekaya özgü tespit ve müdahale için Behind24 ile entegrasyon",
    ],
  },

  "api-security": {
    eyebrow: "AI ve Uygulama Riski",
    title: "API Security",
    summary:
      "Uygulamalarınızı, iş ortaklarınızı ve yapay zeka sistemlerinizi birbirine bağlayan API'leri keşfedin, test edin ve koruyun.",
    overview: [
      "API'ler artık uygulamaların, iş ortaklarının ve yapay zeka sistemlerinin veri alışverişi yaptığı temel yoldur — bu da onları saldırganların içeri girdiği temel yol haline getirir. Geleneksel web uygulama güvenlik duvarları, bozuk nesne düzeyi yetkilendirme veya aşırı veri açığa çıkması gibi API'ye özgü mantığı anlayacak şekilde tasarlanmamıştı.",
      "Mellivor API Security, ekiplerin gönderdiğini unuttuğu API'ler dahil olmak üzere API ayak izinizi haritalar ve API'lerin gerçekte nasıl kötüye kullanıldığını anlayan kontroller uygular.",
    ],
    whyItMatters: [
      "Çoğu API ihlali egzotik istismarlar içermez — gerektiğinden fazla veri döndüren bir uç nokta veya yalnızca mutlu senaryoda çalışan bir yetkilendirme kontrolü söz konusudur. Bunlar, bir araştırmacı ya da saldırgan onları bulana kadar sessizce büyüyen hatalardır.",
      "Gölgede kalan ve belgelenmemiş API'ler, sıklıkla en fazla açığa neden olanlardır — çünkü kimse onları izlemiyordur.",
    ],
    challenge: [
      "Güvenlik ekiplerinin sürdürdüğü envanterin dışında kalan gölge ve belgelenmemiş API'ler",
      "API çağrıları arasında bozuk nesne düzeyi ve fonksiyon düzeyi yetkilendirme",
      "En az ayrıcalık yerine kolaylık için tasarlanmış API yanıtlarında aşırı veri açığa çıkması",
      "Normal API kullanımı gibi görünen bot ve kimlik bilgisi doldurma trafiği",
    ],
    approach: [
      "Birinci taraf, üçüncü taraf ve gölge API'lerin sürekli keşfi",
      "Yalnızca hatalı biçimlendirilmiş istekleri değil, mantık tabanlı kötüye kullanımı da yakalamak için API davranışının çalışma zamanı analizi",
      "Yayından önce veri aşırı açığa çıkmasını yakalamak için şema ve spesifikasyon doğrulaması",
      "Anormal API trafiğinin gerçek zamanlı tespiti için Behind24 entegrasyonu",
    ],
  },

  "web-application-security": {
    eyebrow: "AI ve Uygulama Riski",
    title: "Web Uygulama Güvenliği",
    summary:
      "Müşterilerinizin gerçekten kullandığı uygulamalar için sürekli test ve çalışma zamanı koruması.",
    overview: [
      "Web uygulamaları, saldırganların önemli sistemlere — müşteri kayıtlarına, ödeme akışlarına, iç araçlara — en doğrudan erişim yoludur. Belirli bir ana yapılan taramalar dünün güvenlik açıklarını yakalar; her dağıtımla birlikte değişenleri yakalamaz.",
      "Mellivor Web Uygulama Güvenliği, sürekli testi çalışma zamanı korumasıyla birleştirerek yayın döngüleri arasında boşluk kalmamasını sağlar.",
    ],
    whyItMatters: [
      "Müşteriye yönelik bir uygulamadaki tek bir enjeksiyon açığı veya kimlik doğrulama atlatması, ayrıcalıklı erişim gerektirmeden herhangi bir tarayıcı sahibi tarafından keşfedilebilecek şekilde, tam bir ağ ihlaliyle aynı hacimde veriyi açığa çıkarabilir.",
      "Uygulama katmanı riski, genellikle veri kurumdan gerçekten çıktığı için düzenleyicilerin ve müşterilerin ilk gördüğü risktir.",
    ],
    challenge: [
      "Seyrek tarama veya sızma testi döngüleri arasında ortaya çıkan güvenlik açıkları",
      "Otomatik tarayıcıların rutin olarak kaçırdığı iş mantığı hataları",
      "Saldırı yüzeyini sessizce genişleten üçüncü taraf betikleri ve bağımlılıklar",
      "Bir yayın süreci parçası yerine bir yayın engelleyici olarak ele alınan güvenlik testi",
    ],
    approach: [
      "Geliştirme yaşam döngüsüne entegre edilmiş sürekli uygulama testi",
      "Uygulama davranışı değiştikçe uyum sağlayan çalışma zamanı koruması",
      "Bağımlılık ve üçüncü taraf betik riski değerlendirmesi",
      "Yalnızca CVSS puanına değil, gerçek istismar edilebilirliğe bağlı önceliklendirilmiş giderim rehberliği",
    ],
  },

  "threat-intelligence": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Tehdit İstihbaratı",
    summary: "Ekibinizin geldiği gün harekete geçebileceği, bağlamsal ve zamanında istihbarat.",
    overview: [
      "Çoğu güvenlik ekibinin kullanabileceğinden daha fazla tehdit verisi vardır ama gerçekten kendileriyle alakalı olan yeterince veri yoktur. Bağlamı olmayan göstergelerle dolu genel akışlar karar değil, gürültü yaratır.",
      "Mellivor Tehdit İstihbaratı, sektörünüz, coğrafyanız ve teknoloji yığınınızla alakalı olana odaklanır ve ekibinizin geldiği gün harekete geçebileceği bir biçimde sunar.",
    ],
    whyItMatters: [
      "Gelmekte olduğunu göremediğiniz tehditlere karşı savunma yapmak kaybeden bir konumdur. Bağlamsal ve zamanında istihbarata sahip kurumlar, genel gösterge akışlarına güvenenlere kıyasla olayları tutarlı biçimde daha hızlı tespit edip önler.",
      "Atıflandırma ve bağlam, müdahaleyi de değiştirir: sektörünüze yönelik hedefli bir kampanya, fırsatçı tarama gürültüsünden farklı bir duruş gerektirir.",
    ],
    challenge: [
      "Ortamınızla alakası olmayan göstergelerle dolu tehdit akışları",
      "İstihbarat ile bu istihbarata göre hareket etmesi gereken kontroller arasında net bir bağlantının olmaması",
      "Sektörünüzü özellikle hedefleyen tehdit aktörlerine dair sınırlı görünürlük",
      "Aktif bir olayın sonucunu değiştiremeyecek kadar geç gelen istihbarat",
    ],
    approach: [
      "Sektörünüze, coğrafyanıza ve teknoloji ayak izinize göre özelleştirilmiş istihbarat",
      "Behind24 tespit kurallarına ve SOAR playbook'larına doğrudan besleme",
      "Ham istihbaratı operasyonel rehberliğe çeviren düzenli brifingler",
      "Hedefli konuşmalar için karanlık ağ ve kapalı kaynak izleme",
    ],
  },

  "attack-surface-management": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Saldırı Yüzeyi Yönetimi",
    summary: "Ortamınızı bir saldırganın gördüğü gibi görün — yılda bir değil, sürekli olarak.",
    overview: [
      "Kurumsal saldırı yüzeyleri; bir ekip yeni bir bulut hesabı, unutulmuş bir alt alan adı veya gölge bir SaaS entegrasyonu her açtığında büyür — genellikle güvenlik bundan hiç haberdar olmadan. Var olduğunu bilmediğiniz şeyi güvence altına alamazsınız.",
      "Mellivor Saldırı Yüzeyi Yönetimi, dış dünyaya açık olan her şeyi hem sizin hem de bir saldırganın bakış açısından sürekli olarak haritalar.",
    ],
    whyItMatters: [
      "Saldırganların ilk bulduğu varlıklar nadiren güvenlik ekiplerinin yakından izlediği varlıklardır — bunlar genellikle unutulmuş bir hazırlık sunucusu, süresi dolmuş bir sertifika veya kimsenin sağladığını hatırlamadığı bir alt alan adıdır.",
      "Doğru ve güncel bir varlık envanteri, diğer her kontrolün üzerine inşa edildiği temeldir; bu olmadan güvenlik açığı yönetimi de tespit de eksik bir tablodan çalışır.",
    ],
    challenge: [
      "Mevcut envanterlerin dışında kalan gölge BT ve yönetilmeyen bulut varlıkları",
      "Bir gecede bilinmeyen altyapı getiren birleşme ve satın alma faaliyetleri",
      "Süresi dolmuş sertifikalar, açığa çıkmış yönetici panelleri ve unutulmuş alt alan adları",
      "Herhangi bir anda internete gerçekte neyin açık olduğuna dair tek bir görünümün olmaması",
    ],
    approach: [
      "İnternete açık varlıkların sürekli, dışarıdan içeriye keşfi",
      "Maruziyet ve istismar edilebilirliğe dayalı otomatik risk puanlaması",
      "Yalnızca periyodik raporlar değil, yeni keşfedilen veya yeni açığa çıkan varlıklar için uyarılar",
      "Önceliklendirilmiş giderim için güvenlik açığı yönetimiyle entegrasyon",
    ],
  },

  "exposure-management": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Maruziyet Yönetimi (CTEM)",
    summary: "En önemli maruziyetleri bulmak, önceliklendirmek ve kapatmak için sürekli bir program.",
    overview: [
      "Sürekli Tehdit Maruziyeti Yönetimi, güvenliği periyodik, belirli bir ana ait değerlendirmelerden; kapsam belirleme, keşif, önceliklendirme, doğrulama ve harekete geçirmeden oluşan sürekli bir döngüye kaydırır — ortamların gerçekte ne kadar hızlı değiştiğine uyacak şekilde.",
      "Mellivor'un CTEM programı; varlık keşfini, güvenlik açığı verisini ve tehdit istihbaratını, asla tam olarak örtüşmeyen üç ayrı rapor yerine tek bir önceliklendirilmiş maruziyet görünümünde birleştirir.",
    ],
    whyItMatters: [
      "Çoğu kurumun binlerce açık bulgusu vardır ve bu hafta hangi on tanesinin gerçekten önemli olduğunu güvenilir şekilde bilmenin bir yolu yoktur. Maruziyet yönetimi tam olarak bu soruyu, çeyrekte bir değil sürekli olarak yanıtlamak için var olur.",
      "Yönetim kurulları giderek bir tarama değil bir program bekliyor — CTEM, güvenlik liderlerine maruziyetin zaman içinde aktif olarak azaltıldığını gösteren savunulabilir, tekrarlanabilir bir yol sunar.",
    ],
    challenge: [
      "Birbirinden kopuk araçlara ve raporlara dağılmış güvenlik açığı ve maruziyet verisi",
      "Binlerce bulguyu gerçek iş riskine göre önceliklendirmek için tutarlı bir yöntemin olmaması",
      "Haftalar içinde bayatlayan belirli bir ana ait değerlendirmeler",
      "Maruziyetin yalnızca kayıt altına alınmadığını, gerçekten azaldığını kanıtlamanın zorluğu",
    ],
    approach: [
      "Bulut, şirket içi ve üçüncü taraf varlıklar genelinde sürekli kapsam belirleme ve keşif",
      "İstismar edilebilirliği, varlık değerini ve tehdit istihbaratını birleştiren risk tabanlı önceliklendirme",
      "Güvenli, kontrollü testler yoluyla maruziyetlerin doğrulanması",
      "Giderim sahipleriyle döngüyü kapatmak için yapılandırılmış harekete geçirme iş akışları",
    ],
  },

  "vulnerability-management": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Güvenlik Açığı Yönetimi",
    summary: "Giderimi ham önem derecesine göre değil, gerçek dünyadaki istismar edilebilirliğe göre önceliklendirin.",
    overview: [
      "Tarama kolay kısımdır — çoğu program zaten herhangi bir ekibin giderebileceğinden daha fazla bulgu üretir. Zor olan kısım, hangi güvenlik açıklarının kendi ortamınızda gerçekten risk yarattığını bilmektir.",
      "Mellivor Güvenlik Açığı Yönetimi; ham CVSS puanına değil, istismar edilebilirliğe ve iş bağlamına göre önceliklendirir, böylece giderim çabası gerçekten riski azaltan yere gider.",
    ],
    whyItMatters: [
      "'Güvenlik açığı var' ile 'ortamınızda gerçekten istismar edilebilir' arasındaki boşluk, çoğu giderim çabasının boşa harcandığı yerdir. Bu boşluğu kapatmak, bir güvenlik programının yapabileceği en büyük verimlilik kazanımlarından biridir.",
      "Yamalanmamış, internete açık güvenlik açıkları, gerçek ihlallerde en yaygın ilk erişim vektörlerinden biri olmaya devam ediyor — risk iyi biliniyor ama nadiren hak ettiği aciliyetle yönetiliyor.",
    ],
    challenge: [
      "Tarama sonuçlarının ekibin giderim kapasitesini aşması",
      "Yalnızca önem derecesine dayalı, gerçek dünya istismar edilebilirliğini göz ardı eden önceliklendirme",
      "Aktif istismar zaman çizelgelerinin gerisinde kalan yama döngüleri",
      "BT ve uygulama ekipleri arasında net bir giderim sahipliğinin olmaması",
    ],
    approach: [
      "Bulut, şirket içi ve uygulama katmanları genelinde sürekli tarama",
      "İstismar edilebilirlik ve varlık kritikliğine göre ağırlıklandırılmış risk tabanlı önceliklendirme",
      "Giderim döngüsünü kapatmak için otomatik bilet oluşturma ve sahiplik yönlendirmesi",
      "Yalnızca bulgu sayısını değil, gerçek risk azalmasını gösteren raporlama",
    ],
  },

  "digital-risk-protection": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Dijital Risk Koruması",
    summary: "Kurumunuzla ilişkili maruziyet için açık, derin ve karanlık ağı izleyin.",
    overview: [
      "Dijital ayak iziniz, BT'nin yönettiği varlıkların çok ötesine uzanır — sızdırılmış kimlik bilgileri, taklit alan adları ve forumlarda ve pazar yerlerinde açığa çıkmış veriler, savunulacak geleneksel bir çevresi olmayan risk yaratır.",
      "Mellivor Dijital Risk Koruması, kurumunuzla ilişkili maruziyet için açık, derin ve karanlık ağı izler ve bu gerçek bir olaya dönüşmeden önce harekete geçer.",
    ],
    whyItMatters: [
      "Sızdırılmış kimlik bilgileri veya açığa çıkmış veriler bir ihlal bildiriminde ortaya çıktığında, genellikle aylardır dolaşımdadır. Erken tespit, çoğu zaman kontrol altına alınmış bir olay ile kamuya duyurulmuş bir olay arasındaki farktır.",
      "Dijital risk, organizasyon şemasına saygı göstermez — markayı, müşterileri ve yöneticileri aynı anda etkiler, bu da onu yalnızca teknik değil bir iş riski haline getirir.",
    ],
    challenge: [
      "Görünürlük olmadan forumlarda ve pazar yerlerinde dolaşan sızdırılmış kimlik bilgileri ve hassas veriler",
      "Kimlik avı ve dolandırıcılık için kullanılan taklit alan adları ve sosyal medya profilleri",
      "Kamuya açık veri toplama yoluyla yönetici ve çalışan maruziyeti",
      "Açığa çıkan veri aktif olarak istismar edilmeden önce erken uyarının olmaması",
    ],
    approach: [
      "Açık, derin ve karanlık ağ kaynakları genelinde sürekli izleme",
      "Alan adlarınızla ilişkili sızdırılmış kimlik bilgilerinin otomatik tespiti",
      "Taklit alan adları ve sahte profiller için kaldırma desteği",
      "Yüksek riskli bireyler için yöneticiye özel izleme",
    ],
  },

  "brand-protection": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Marka Koruması",
    summary: "Kimlik avı sitelerini, sahtelerini ve taklitleri büyümeden önce bulun ve kapatın.",
    overview: [
      "Kimlik avı kitleri, sahte mağazalar ve taklit sosyal medya hesapları markanızın güvenine dayanır — ve her biri, güvenlik ekibiniz fark etmeden önce müşterilerinizin yaşadığı bir sorundur.",
      "Mellivor Marka Koruması, anlamlı bir ölçeğe ulaşmadan önce alan adları, sosyal platformlar ve uygulama mağazaları genelinde marka kötüye kullanımını bulur ve buna karşı harekete geçer.",
    ],
    whyItMatters: [
      "Müşteriler 'şirket ihlal edildi' ile 'biri şirketi taklit etti' arasında nadiren ayrım yapar — itibar hasarı her iki durumda da aynı şekilde yansır.",
      "Marka kötüye kullanımı ayrıca genellikle daha geniş bir kimlik avı kampanyasının ilk işaretidir; erken yakalamak, ardından gelecek kimlik bilgisi hırsızlığını önleyebilir.",
    ],
    challenge: [
      "Kimlik avı kampanyaları için kullanılan benzer görünümlü alan adları ve tipo squatting",
      "Marka tanınırlığından yararlanan sahte ürünler ve mağazalar",
      "Doğrudan müşterileri hedef alan taklit sosyal medya hesapları",
      "Kötüye kullanımın haftalarca sürmesine izin veren yavaş, manuel kaldırma süreçleri",
    ],
    approach: [
      "Alan adı, sosyal medya ve pazar yeri taklidi için sürekli izleme",
      "Gerçek marka varlıklarınıza ve ticari markalarınıza bağlı otomatik tespit",
      "Kayıt kuruluşları, platformlar ve pazar yerleri genelinde yönetilen kaldırma süreci",
      "Tekrarlayan kötüye kullanım kalıplarını ve kaynaklarını belirlemek için trend raporlaması",
    ],
  },

  "deception-technology": {
    eyebrow: "Tehdit ve Maruziyet",
    title: "Deception (Aldatma Teknolojisi)",
    summary: "Bir saldırganın tuzakla herhangi bir etkileşimini yüksek güvenilirlikli bir uyarıya dönüştürün.",
    overview: [
      "Geleneksel tespit, bir saldırganın bir kuralı tetiklemesini bekler. Aldatma teknolojisi, saldırganlara dokunmak için meşru bir nedeni olmayan bir şey sunar — herhangi bir etkileşimi yüksek güvenilirlikli bir uyarıya dönüştürür.",
      "Mellivor Aldatma Teknolojisi, gerçek varlıklarla uyum sağlayan tuzakları ve yemleri ortamınız genelinde konuşlandırır, yanal hareketi gerçek bir şeye ulaşmadan çok önce yakalar.",
    ],
    whyItMatters: [
      "Aldatma, mevcut en düşük yanlış pozitif oranlı uyarılardan bazılarını üretir çünkü bir tuzağa dokunmanın meşru bir nedeni yoktur. Bu sinyal kalitesi, gürültüde boğulan bir SOC için nadir ve değerlidir.",
      "Aynı zamanda, ağa henüz girmeye çalışan saldırganlara karşı olduğu kadar zaten içeride olanlara karşı da aynı derecede iyi çalışan az sayıdaki kontrolden biridir.",
    ],
    challenge: [
      "Çevre ve uç nokta kontrollerini zaten atlatmış saldırganlar",
      "Veri sızdırılana kadar fark edilmeyen yanal hareket",
      "Geleneksel tespitten kaynaklanan ve gerçek sinyali boğan yüksek yanlış pozitif oranları",
      "Ağ içine girildikten sonra saldırgan davranışına dair sınırlı görünürlük",
    ],
    approach: [
      "Bulut ve şirket içi ortamlar genelinde konuşlandırılan tuzak varlıklar ve kimlik bilgileri",
      "Gerçek ortamınızla uyum sağlayacak şekilde tasarlanmış gerçekçi yemler",
      "Bir tuzağa dokunulduğu anda yüksek güvenilirlikli uyarı",
      "Anında müdahale için Behind24 ile doğrudan entegrasyon",
    ],
  },

  mdr: {
    eyebrow: "Tespit ve Müdahale",
    title: "MDR",
    summary: "Sıfırdan bir SOC kurmadan, Behind24 aracılığıyla sunulan 7/24 tespit ve müdahale.",
    overview: [
      "Yönetilen Tespit ve Müdahale, modern bir güvenlik programının en zor ve en pahalı kısımlarından birini — bir SOC'yi kurmadan, personel almadan ve elde tutmadan — 7/24 SOC hizmeti sunar.",
      "Behind24 aracılığıyla sunulan Mellivor MDR, sürekli izlemeyi yalnızca uyarıları ekibinize iletmekle kalmayıp gerçekten müdahale eden analistlerle birleştirir.",
    ],
    whyItMatters: [
      "Saldırılar mesai saatlerinde gerçekleşmez ve sürekli kapsama alanı olmayan kurumlar için bir ihlali tespit etme süresi hâlâ dakikalarla değil günlerle ölçülüyor.",
      "Güvenlik yeteneği kıtlığı, çoğu kurum için gerçek 7/24 SOC kapsamasını en büyük kurumlar dışında pratik olmaktan çıkarıyor — MDR genellikle gerçek 7/24 kapsamaya giden tek gerçekçi yoldur.",
    ],
    challenge: [
      "İç kaynaklarla 7/24 bir SOC'yi personel açısından desteklemenin pratik bir yolunun olmaması",
      "İç ekibin triyaj kapasitesini aşan uyarı hacmi",
      "Bir olayı gerçekten kontrol altına alacak takibi olmayan tespit",
      "Ortaya çıkan saldırı teknikleri ve tehdit aktörü davranışındaki yetenek boşlukları",
    ],
    approach: [
      "Behind24 aracılığıyla sunulan 7/24 izleme ve triyaj",
      "Yalnızca uyarmakla kalmayıp doğrudan kontrol altına alma eylemi yapmaya yetkili analistler",
      "Otomatik tespit kurallarının ötesinde düzenli tehdit avcılığı",
      "Ekibinizin ne olduğunu ve nedenini her zaman bilmesini sağlayan şeffaf raporlama",
    ],
  },

  ndr: {
    eyebrow: "Tespit ve Müdahale",
    title: "NDR",
    summary: "Geleneksel araçların kaçırdığı yanal hareketi ve anormal davranışı yakalayın.",
    overview: [
      "Ağ Tespit ve Müdahale, uç nokta ve çevre araçlarının kaçırdığı türde anormal davranışlar için trafik desenlerini izler — özellikle bir saldırgan zaten içerideyken ve yanal olarak hareket ederken.",
      "Mellivor NDR, ağ davranışını sürekli analiz ederek ortamınızın normalde nasıl çalıştığıyla uyuşmayan trafik desenlerini işaretler.",
    ],
    whyItMatters: [
      "Uç nokta tespitinden kaçan saldırganlar, değerli bir şeye ulaşmak için yine de ağ üzerinden hareket etmek zorundadır — bu da ağ davranışını saklanmanın gerçekten zor olduğu az sayıdaki sinyalden biri yapar.",
      "NDR aynı zamanda geleneksel uç nokta ajanlarını hiç çalıştıramayan yönetilmeyen ve IoT cihazlarına karşı etkili az sayıdaki kontrolden biridir.",
    ],
    challenge: [
      "Uç nokta tespitini tamamen atlatan yanal hareket",
      "Geleneksel ajanları çalıştıramayan yönetilmeyen ve IoT cihazları",
      "Gerçek veri yüklerine görünürlüğü sınırlayan şifreli trafik",
      "Ağ içindeki doğu-batı trafiğinin büyük ölçüde izlenmemesi",
    ],
    approach: [
      "Doğu-batı ve kuzey-güney trafiğinin sürekli davranışsal analizi",
      "Genel imzalar yerine ortamınızın gerçek trafik temel çizgisine göre ayarlanmış tespit",
      "Ajan gerektirmeden yönetilmeyen ve IoT cihazları için kapsama",
      "Behind24 aracılığıyla uç nokta ve kimlik sinyaliyle ilişkilendirme",
    ],
  },

  edr: {
    eyebrow: "Tespit ve Müdahale",
    title: "EDR",
    summary: "Bir olay yayılmadan önce ele geçirilmiş uç noktaları tespit edin ve kontrol altına alın.",
    overview: [
      "Uç Nokta Tespit ve Müdahale, bir saldırganın bir cihazda dayanak noktası bulduğu andaki son savunma hattıdır — ve giderek sofistike saldırıların gerçekten yakalandığı ilk yerdir.",
      "Mellivor EDR; davranışsal tespiti, bir bilet açılana kadar değil hemen ele geçirilmiş bir uç noktayı kontrol altına almak için gereken müdahale eylemleriyle birleştirir.",
    ],
    whyItMatters: [
      "Fidye yazılımı ve çoğu modern sızma sonunda bir uç noktaya dokunur — soru bunun olup olmayacağı değil, ilk dakikalarda mı yoksa günler sonra mı fark edileceğidir.",
      "Uç noktadaki kontrol altına alma hızı, çoğunlukla bir olayın tek bir makineyle sınırlı kalıp kalmayacağını yoksa ağa yayılıp yayılmayacağını belirler.",
    ],
    challenge: [
      "İmza tabanlı araçları atlatan dosyasız ve 'living-off-the-land' teknikleri",
      "Yönetilen cihaz filosu dışında izlenmeyen uç noktalar",
      "Ele geçirilmiş bir cihazı hemen izole etme yeteneği olmayan tespit",
      "Çok gevşek veya çok sıkı ayarlanmış uç nokta araçlarından kaynaklanan uyarı yorgunluğu",
    ],
    approach: [
      "'Living-off-the-land' ve dosyasız tekniklere göre ayarlanmış davranışsal tespit",
      "Müdahale edenlerin doğrudan erişebildiği tek tıkla izolasyon ve giderim eylemleri",
      "Mümkün olduğunda yönetilmeyen ve BYOD uç noktalarına genişletilmiş kapsama",
      "Behind24 tehdit istihbaratıyla beslenen sürekli ayar",
    ],
  },

  xdr: {
    eyebrow: "Tespit ve Müdahale",
    title: "XDR",
    summary: "Uç nokta, ağ, kimlik ve bulut genelindeki sinyali tek bir olay görünümünde birleştirin.",
    overview: [
      "Genişletilmiş Tespit ve Müdahale, analistleri ayrı konsollardan gelen parçaları manuel olarak bir araya getirmeye bırakmak yerine uç nokta, ağ, kimlik ve bulut genelindeki sinyali ilişkilendirir.",
      "Mellivor XDR, Behind24'ün tespit kaynaklarını tek, önceliklendirilmiş bir olay görünümünde birbirine bağlayan ilişkilendirme katmanıdır.",
    ],
    whyItMatters: [
      "Ortalama bir kurumsal SOC, her biri kendi uyarılarına sahip düzinelerce güvenlik aracıyla uğraşır. XDR, bir saldırının gerçek hikayesinin neredeyse her zaman bunlardan birkaçına dağılmış olması nedeniyle var olur.",
      "Daha hızlı ilişkilendirme doğrudan daha hızlı kontrol altına almaya dönüşür — analistlerin uyarıları manuel olarak birbirine bağlamak için harcadığı zaman, aktif bir saldırganın daha derine inmek için harcadığı zamandır.",
    ],
    challenge: [
      "Bir düzineden fazla birbirinden kopuk araca ve konsola dağılmış güvenlik sinyali",
      "Analistlerin zaten bağlantılı olması gereken uyarıları manuel olarak ilişkilendirmesi",
      "Saldırının tam hikayesi tek bir yerde görünmediği için daha yavaş kontrol altına alma",
      "Tespit sonuçlarını iyileştirmeden maliyeti artıran araç çeşitliliği",
    ],
    approach: [
      "Uç nokta, ağ, kimlik ve bulut sinyalinin tek bir olay görünümünde ilişkilendirilmesi",
      "İzole uyarılara değil, tam saldırı zincirine dayalı otomatik önceliklendirme",
      "Baştan sona değiştirme yerine mevcut araçlarla yerel entegrasyon",
      "Mellivor One içinde birleşik soruşturma iş akışı",
    ],
  },

  siem: {
    eyebrow: "Tespit ve Müdahale",
    title: "SIEM",
    summary: "Ayarlı, güncel ve gerçekten kullanışlı kalan yönetilen bir SIEM.",
    overview: [
      "Güvenlik Bilgi ve Olay Yönetimi, çoğu uyumluluk ve tespit programının hâlâ omurgasıdır — asıl zorluk her zaman onu ayarlı, güncel ve kimsenin sorgulamadığı bir log arşivi olmaktan çıkarıp gerçekten kullanışlı tutmak olmuştur.",
      "Mellivor'un yönetilen SIEM'i, tespit içeriğini güncel tutar ve log verisini Behind24'ü besleyen aynı istihbaratla ilişkilendirir.",
    ],
    whyItMatters: [
      "Ayarlanmamış kurallarla dolu bir SIEM, gerçek uyarıların gürültüde kaybolmasına neden olacak kadar çok sayıda yanlış pozitif üretir — bu da yetersiz yönetilen bir SIEM'in gerçek koruma yerine sahte bir güvenlik duygusu yaratabileceği anlamına gelir.",
      "Uyumluluk çerçeveleri rutin olarak merkezi loglama ve izleme gerektirir; iyi işletilen bir SIEM genellikle hem denetim gereksinimlerini hem de gerçek tespit ihtiyaçlarını aynı anda karşılar.",
    ],
    challenge: [
      "Ortam ve tehdit ortamı değiştikçe bayatlayan tespit kuralları",
      "Ekibin etkin şekilde triyaj yapamayacağı kadar yüksek uyarı hacmi",
      "Tutarsız şekilde devreye alınan log kaynakları, kör noktalar bırakıyor",
      "Aktif bir tespit aracı yerine bir uyumluluk kutucuğu olarak ele alınan SIEM",
    ],
    approach: [
      "Ortam genelinde log kaynaklarının yönetilen devreye alınması ve normalleştirilmesi",
      "Güncel tehdit istihbaratıyla beslenen sürekli güncellenen tespit içeriği",
      "Gerçek sinyali kaybetmeden yanlış pozitifleri azaltmak için ayarlama",
      "Triyaj ve müdahale için Behind24'e doğrudan aktarım",
    ],
  },

  soar: {
    eyebrow: "Tespit ve Müdahale",
    title: "SOAR",
    summary: "Tekrarlanan müdahale işini otomatikleştirin, böylece analistler gerçek kararlara odaklanabilsin.",
    overview: [
      "Güvenlik Orkestrasyon, Otomasyon ve Müdahale, zenginleştirme, kontrol altına alma, bildirim gibi tekrarlayan analist işlerini otomatik playbook'lara dönüştürür; böylece analist zamanı gerçekten bir insana ihtiyaç duyan kararlara gider.",
      "Mellivor SOAR, Behind24'ün müdahale eylemlerinin arkasındaki playbook'ları çalıştırarak bir kişiyi beklemesi gerekmeyen adımları otomatikleştirir.",
    ],
    whyItMatters: [
      "Tespit ile kontrol altına alma arasındaki süre genellikle manuel, tekrarlayan adımlarla doludur — bunları otomatikleştirmek, ortalama müdahale süresini kısaltmanın en doğrudan yollarından biridir.",
      "Ayrıca zaten yoğun analistlerin üzerindeki yükü azaltarak daha küçük bir ekibin tükenmeden daha fazla olay hacmini yönetmesini sağlar.",
    ],
    challenge: [
      "Her olayda analist zamanını tüketen manuel, tekrarlayan müdahale adımları",
      "Vardiyada hangi analistin olduğuna bağlı tutarsız müdahale kalitesi",
      "Analistlerin araçlar genelinde manuel olarak bağlam toplaması nedeniyle yavaş kontrol altına alma",
      "Personel sayısını artırmadan müdahale kapasitesini ölçeklendirme zorluğu",
    ],
    approach: [
      "Yaygın zenginleştirme ve kontrol altına alma eylemleri için otomatik playbook'lar",
      "Hangi analistin nöbetçi olduğuna bakılmaksızın tutarlı müdahale uygulaması",
      "Daha yüksek riskli otomatik eylemler için insan onaylı adımlar",
      "Gerçek olay sonuçlarına dayalı sürekli playbook iyileştirmesi",
    ],
  },

  "cloud-security": {
    eyebrow: "Altyapı ve Veri",
    title: "Bulut Güvenliği",
    summary: "Çalıştırdığınız her bulut hesabı ve iş yükü genelinde sürekli duruş yönetimi.",
    overview: [
      "Bulut ortamları saatlik olarak değişir — yeni hizmetler, yeni izinler, yeni yanlış yapılandırmalar — bu da belirli bir ana ait bulut incelemelerini tamamlanır tamamlanmaz neredeyse geçersiz kılar.",
      "Mellivor Bulut Güvenliği, bulut hesaplarınız ve iş yükleriniz genelinde duruşu sürekli olarak değerlendirir, sapmayı bir sonraki denetimde değil gerçekleştiği anda yakalar.",
    ],
    whyItMatters: [
      "Yeni istismarlar değil, yanlış yapılandırma bulut güvenliği olaylarının başlıca nedeni olmaya devam ediyor — açık bir depolama kovası veya aşırı izinli bir rol, bir sıfırıncı gün açığından çok daha yaygındır.",
      "Çok bulutlu ve hibrit ortamlar bu riski katlar, çünkü her ek platformla tutarlı politika uygulaması daha da zorlaşır.",
    ],
    challenge: [
      "Manuel incelemelerin yakalayabileceğinden daha hızlı ortaya çıkan yanlış yapılandırmalar",
      "Bulut hesapları genelinde aşırı izinli kimlik ve erişim rolleri",
      "Çok bulutlu ve hibrit ortamlar genelinde tutarsız güvenlik duruşu",
      "Yalnızca dağıtımdan sonra keşfedilen iş yükü güvenlik açıkları",
    ],
    approach: [
      "Hesaplar ve sağlayıcılar genelinde sürekli bulut güvenlik duruşu yönetimi",
      "En az ayrıcalık erişim analizi ve giderim rehberliği",
      "CI/CD hatlarına entegre edilmiş iş yükü taraması",
      "Çok bulutlu ve hibrit ortamlar genelinde birleşik duruş görünümü",
    ],
  },

  "identity-security": {
    eyebrow: "Altyapı ve Veri",
    title: "Kimlik Güvenliği",
    summary: "Kimin ve neyin neye erişimi olduğunu sürekli olarak yönetin.",
    overview: [
      "Kimlik, çoğu kuruma giden birincil saldırı yolu haline geldi — ele geçirilmiş kimlik bilgileri, aşırı sağlanmış erişim ve yönetilmeyen hizmet hesapları rutin olarak herhangi bir çevre kontrolünü geride bırakıyor.",
      "Mellivor Kimlik Güvenliği, tamamlandığı gün bayatlayan periyodik erişim incelemelerine güvenmek yerine, kimin ve neyin neye erişimi olduğunu sürekli olarak yönetir.",
    ],
    whyItMatters: [
      "Kimlik bilgisi tabanlı saldırılar, gerçek dünya ihlallerinde en yaygın ilk erişim yollarından biri olmaya devam ediyor — çünkü geçerli bir giriş, bir istismarla aynı şüpheyi tetiklemiyor.",
      "Aşırı sağlanmış erişim, tek bir ele geçirilmiş hesabı olması gerekenden çok daha büyük bir etki alanına dönüştürür — kimlik hijyeni, bir saldırganın ne kadar ileri gidebileceğini doğrudan sınırlar.",
    ],
    challenge: [
      "Yıllar içinde biriken ve düzenli olarak incelenmeyen aşırı sağlanmış erişim",
      "Ayrıcalıklı erişimi olan yönetilmeyen ve sahipsiz kalmış hizmet hesapları",
      "Kişisel ve kurumsal hesaplar genelinde kimlik bilgisi hırsızlığı ve yeniden kullanımı",
      "Sistemler genelinde tutarsız çok faktörlü kimlik doğrulama uygulaması",
    ],
    approach: [
      "Sürekli erişim incelemesi ve en az ayrıcalık uygulaması",
      "Hizmet ve makine kimliklerinin keşfi ve yönetişimi",
      "En önemli hesaplar için ayrıcalıklı erişim yönetimi",
      "Anormal kimlik doğrulama ve erişim desenlerinin davranışsal tespiti",
    ],
  },

  "data-security": {
    eyebrow: "Altyapı ve Veri",
    title: "Veri Güvenliği",
    summary: "Hassas verinin nerede olduğunu bilin ve onu gerçekte ne olduğuna göre koruyun.",
    overview: [
      "Çoğu kurum, hassas verisinin gerçekte nerede bulunduğunu, kimin erişebildiğini veya zaten nereye kopyalandığını güvenle söyleyemez — bu da bunun üzerine inşa edilen her kontrolü göründüğünden daha zayıf yapar.",
      "Mellivor Veri Güvenliği, ortamınız genelinde hassas veriyi keşfeder ve sınıflandırır, ardından yalnızca nerede olduğuna değil gerçekte ne olduğuna göre koruma uygular.",
    ],
    whyItMatters: [
      "Düzenleyiciler ve müşteriler bir olayı giderek saldırganın nasıl girdiğine değil, hangi verinin açığa çıktığına göre değerlendiriyor — veri koruması genellikle kontrol altına alınmış bir olay ile bildirilmesi gereken bir ihlal arasındaki farktır.",
      "Veri, güvenliğin hiç planlamadığı yerlere — elektronik tablolara, sohbet dışa aktarımlarına, gölge SaaS araçlarına — yayılma eğilimindedir ve her kopya, kaybolabileceği yeni bir yerdir.",
    ],
    challenge: [
      "Onaylı ve onaysız araçlara envanteri olmadan yayılmış hassas veri",
      "Tutarsız sınıflandırma, tutarsız korumaya yol açıyor",
      "Geleneksel DLP kapsamının dışındaki kanallar üzerinden veri sızdırma",
      "Kurumun gerçek veri görünürlüğünü aşan düzenleyici gereksinimler",
    ],
    approach: [
      "Ölçekte hassas verinin otomatik keşfi ve sınıflandırılması",
      "Yalnızca konuma değil veri hassasiyetine göre uygulanan koruma politikaları",
      "Bulut, e-posta ve uç nokta kanalları genelinde sızdırma izleme",
      "İlgili düzenleyici gereksinimlerle doğrudan eşleştirilmiş raporlama",
    ],
  },

  "network-security": {
    eyebrow: "Altyapı ve Veri",
    title: "Ağ Güvenliği",
    summary: "Temiz bir sınırı olmayan bir ortamda tutarlı segmentasyon ve izleme.",
    overview: [
      "Ağ çevresi bulut, uzaktan çalışma ve üçüncü taraf bağlantılarının bir karışımına dağıldı, ancak ağ katmanı kontrolleri hâlâ vazgeçilmez — sadece artık tek bir sınırı olmayan bir ortamda çalışmaları gerekiyor.",
      "Mellivor Ağ Güvenliği, ağın eskiden nasıl göründüğüne dair bir diyagram yerine bu gerçeklik genelinde tutarlı segmentasyon, filtreleme ve izleme uygular.",
    ],
    whyItMatters: [
      "Düz, segmente edilmemiş ağlar, ele geçirilmiş tek bir cihazı diğer her şeye sınırsız erişime dönüştürür — segmentasyon, bir olayın ne kadar yayılabileceğini sınırlamak için en yüksek etkili kontrollerden biridir.",
      "Ortamlar daha dağınık hale geldikçe, tutarlı ağ politikası uygulaması aynı anda hem daha zor hem de daha önemli hale geliyor.",
    ],
    challenge: [
      "Tek bir ele geçirmenin kontrolsüz yayılmasına izin veren düz ağ mimarileri",
      "Veri merkezleri, bulut ve uzak siteler genelinde tutarsız politika uygulaması",
      "Modern segmentasyon yaklaşımlarını destekleyemeyen eski altyapı",
      "Segmentler arasındaki doğu-batı trafiğine sınırlı görünürlük",
    ],
    approach: [
      "Ortamlar genelinde segmentasyon stratejisi tasarımı ve uygulaması",
      "Şirket içi, bulut ve uzaktan erişim genelinde tutarlı politika uygulaması",
      "Doğu-batı ve çevre trafiğinin sürekli izlenmesi",
      "Birleşik ağ görünürlüğü için NDR ve Behind24 ile entegrasyon",
    ],
  },

  "email-security": {
    eyebrow: "Altyapı ve Veri",
    title: "E-posta Güvenliği",
    summary: "Kimlik avının istismar ettiği boşluğu kapatan gelişmiş filtreleme ve farkındalık eğitimi.",
    overview: [
      "E-posta, saldırganların ilk dayanak noktasını elde etmesinin en yaygın yollarından biri olmaya devam ediyor — kimlik avı, iş e-postası ele geçirme ve kötü amaçlı ekler hâlâ işe yarıyor çünkü sistemleri değil insanları hedefliyorlar.",
      "Mellivor E-posta Güvenliği, gelişmiş filtrelemeyi yalnızca teknolojinin kapatamayacağı boşluğu kapatan farkındalık eğitimiyle birleştirir.",
    ],
    whyItMatters: [
      "Kimlik avı, ihlal soruşturmalarında en yaygın ilk erişim vektörleri arasında yer almaya devam ediyor — saldırganlar için çalıştırması ucuzdur ve yalnızca bir kez işe yaraması yeterlidir.",
      "İş e-postası ele geçirme özellikle yalnızca veri açığa çıkmasına değil doğrudan mali kayba neden olur, bu da onu yalnızca BT'nin değil finans ve üst yönetimin de gündemine doğrudan sokar.",
    ],
    challenge: [
      "Yerel e-posta filtrelemesini atlatan kimlik avı ve iş e-postası ele geçirme",
      "İmza tabanlı tespitten kaçan kötü amaçlı ekler ve bağlantılar",
      "Bir saldırının başarılı olup olmayacağını belirleyen faktör olmaya devam eden çalışanlar",
      "Özellikle finans ve İK iş akışlarını hedefleyen yönetici taklidi",
    ],
    approach: [
      "Yerel e-posta platformu korumalarının ötesine geçen gelişmiş filtreleme",
      "Yönetici ve finans hedeflemesine göre ayarlanmış iş e-postası ele geçirme tespiti",
      "Sürekli kimlik avı simülasyonu ve farkındalık eğitimi",
      "Alan adınızı hedefleyen kimlik avı altyapısı için hızlı kaldırma desteği",
    ],
  },

  "zero-trust": {
    eyebrow: "Altyapı ve Veri",
    title: "Zero Trust",
    summary: "Örtük, konum tabanlı güven yerine sürekli doğrulama.",
    overview: [
      "Zero Trust, ağ konumuna dayalı örtük güveni her kullanıcının, cihazın ve isteğin sürekli doğrulanmasıyla değiştirir — hâlâ kale-hendek modeliyle çalışan çoğu kurum için anlamlı bir değişimdir.",
      "Mellivor, teorik bir referans diyagramı değil, gerçek ortamınıza uygun bir Zero Trust mimarisi tasarlamanıza ve uygulamanıza yardımcı olur.",
    ],
    whyItMatters: [
      "Geleneksel güvenilir bir ağın içine girdikten sonra saldırganlar çok az sürtünmeyle hareket eder. Zero Trust bu güven varsayımını her adımda ortadan kaldırır — bu da ilk ele geçirmeden sonra yanal hareketi tam olarak sınırlayan şeydir.",
      "Ayrıca giderek yalnızca bir en iyi uygulama değil, bir uyumluluk ve sigorta beklentisi haline geliyor — birçok çerçeve artık doğrudan Zero Trust ilkelerine atıfta bulunuyor.",
    ],
    challenge: [
      "Tamamen örtük ağ tabanlı güven üzerine kurulmuş eski mimariler",
      "Uygulamalar genelinde tutarsız kimlik ve cihaz doğrulaması",
      "Yanal hareketin kontrolsüz devam etmesine izin veren segmentasyon boşlukları",
      "Uygulama planı olmayan teorik çerçeveler olarak duraklayan Zero Trust girişimleri",
    ],
    approach: [
      "Mevcut ortamınıza uygun Zero Trust mimari tasarımı",
      "Tek bir yıkıcı geçiş yerine riske göre önceliklendirilmiş aşamalı uygulama",
      "Her istek için kimlik, cihaz ve bağlamın sürekli doğrulanması",
      "Mevcut kimlik ve ağ yatırımlarıyla entegrasyon",
    ],
  },

  "ot-iot-security": {
    eyebrow: "Altyapı ve Veri",
    title: "OT / IoT Güvenliği",
    summary: "Operasyonel teknolojinin kısıtlamaları etrafında inşa edilmiş görünürlük ve koruma.",
    overview: [
      "Operasyonel teknoloji ve IoT cihazları güvenlik için değil çalışma süresi ve güvenilirlik için tasarlandı; çoğu ajan çalıştıramaz, çalışma sırasında yamalanamaz ve başından beri internete bağlanmak üzere tasarlanmamıştı.",
      "Mellivor OT/IoT Güvenliği, yeniden düzenlenmiş bir BT güvenlik playbook'u yerine bu kısıtlamalar etrafında tasarlanmış görünürlük ve koruma sağlar.",
    ],
    whyItMatters: [
      "OT'deki bir olay yalnızca veriyi değil, fiziksel güvenliği ve operasyonel sürekliliği de riske atar — bu da risk hesabını ve kabul edilebilir müdahale süresini tamamen değiştirir.",
      "Bu ortamlar aynı zamanda genellikle kurumun en az görünür kısmıdır, bu da onları saldırganlar için BT'den fiziksel olarak önemli sistemlere geçmek için cazip bir yol haline getirir.",
    ],
    challenge: [
      "Geleneksel ajanları veya sık yamalamayı desteklemeyen cihazlar",
      "Güvenlik kontrollerinin uyum sağlayabileceğinden daha hızlı birleşen BT ve OT ağları",
      "Cihaz envanterine ve iletişim desenlerine sınırlı görünürlük",
      "Yerleşik kimlik doğrulaması veya şifrelemesi olmayan eski protokoller",
    ],
    approach: [
      "Operasyonel sistemleri kesintiye uğratmayan pasif keşif ve izleme",
      "Etki alanını sınırlamak için BT ve OT ortamları arasında segmentasyon",
      "Endüstriyel ve IoT iletişim desenlerine göre ayarlanmış protokol farkında tespit",
      "Yalnızca veriyi değil güvenliği ve çalışma süresini hesaba katan risk değerlendirmeleri",
    ],
  },

  "fraud-prevention": {
    eyebrow: "Risk ve Uyumluluk",
    title: "Dolandırıcılık Önleme",
    summary: "Meşru müşteriler için sürtünme eklemeden dolandırıcılığı gerçek zamanlı yakalayın.",
    overview: [
      "Dolandırıcılık giderek otomasyon hızında ilerliyor — hesap ele geçirme, sentetik kimlikler ve ödeme dolandırıcılığının tümü manuel inceleme süreçlerinin yetişebileceğinden çok daha hızlı ölçekleniyor.",
      "Mellivor Dolandırıcılık Önleme, meşru müşteriler için sürtünme eklemeden dolandırıcılık faaliyetini yakalamak için davranışsal analiz ve kimlik sinyali uygular.",
    ],
    whyItMatters: [
      "Dolandırıcılık kayıpları, ölçmesi daha zor olan birçok güvenlik riskinin aksine, doğrudan ve anında bilançoyu etkiler — bu da genellikle olaydan sonra bile olsa üst yönetimin dikkatini hızla çeker.",
      "Dolandırıcılığı durduran aynı kontroller, genellikle yanlış reddi ve gereksiz sürtünmeyi azaltarak meşru müşteri deneyimini de iyileştirir.",
    ],
    challenge: [
      "Alakasız ihlallerden çalınan kimlik bilgileriyle hesap ele geçirme",
      "Standart doğrulama kontrollerini geçmek için tasarlanmış sentetik kimlikler",
      "Statik kural setlerinden daha hızlı gelişen ödeme dolandırıcılığı desenleri",
      "Meşru müşteriler için sürtünme yaratan dolandırıcılık kontrolleri",
    ],
    approach: [
      "Dolandırıcılığı meşru anormalliklerden ayırt etmek için ayarlanmış davranışsal analitik",
      "Tekdüze uygulanmak yerine risk düzeyine göre kalibre edilmiş kimlik doğrulama",
      "Uyarlanabilir kural setleriyle gerçek zamanlı işlem izleme",
      "Onaylanmış dolandırıcılık sonuçlarına dayalı sürekli model ayarı",
    ],
  },

  "third-party-risk-management": {
    eyebrow: "Risk ve Uyumluluk",
    title: "Üçüncü Taraf Risk Yönetimi",
    summary: "Belirli bir ana ait bir anketin değil, tedarikçi güvenlik duruşuna sürekli görünürlük.",
    overview: [
      "Her tedarikçi, yüklenici ve entegrasyon ortağı saldırı yüzeyinizi kontrol etmediğiniz bir ortama genişletir — ve çoğu üçüncü taraf risk programı hâlâ birkaç ay içinde bayatlayan belirli bir ana ait anketlere dayanıyor.",
      "Mellivor Üçüncü Taraf Risk Yönetimi, yalnızca sözleşme imzalanırken bir kutucuğu işaretlemek yerine tedarikçi güvenlik duruşuna sürekli görünürlük sağlar.",
    ],
    whyItMatters: [
      "Büyük ihlallerin giderek artan bir kısmı doğrudan bir saldırı yoluyla değil bir üçüncü taraf aracılığıyla ortaya çıkıyor — güvenlik duruşunuz, sistemlerinize veya verilerinize erişimi olan en zayıf tedarikçi kadar güçlüdür.",
      "Düzenleyici çerçeveler kurumları giderek yalnızca kendi güvenlik hatalarından değil tedarikçi güvenlik hatalarından da sorumlu tutuyor — üçüncü taraf riski artık doğrudan bir uyumluluk konusu.",
    ],
    challenge: [
      "Bayat, belirli bir ana ait anketlere dayanan tedarikçi risk değerlendirmeleri",
      "Katılım sonrasında tedarikçi güvenlik duruşuna sürekli görünürlüğün olmaması",
      "Tedarikçilerin kendi tedarik zincirlerinde gizli kalan dördüncü taraf riski",
      "Hangi tedarikçi ilişkilerinin en yüksek riski taşıdığını önceliklendirme zorluğu",
    ],
    approach: [
      "Yalnızca katılım incelemesi değil tedarikçi güvenlik duruşunun sürekli izlenmesi",
      "Gerçek erişime ve veri açığa çıkmasına odaklanan risk tabanlı katmanlandırma",
      "Sabit takvimler yerine gerçek duruş değişiklikleriyle tetiklenen sürekli yeniden değerlendirme",
      "Bir tedarikçinin risk profili değiştiğinde net eskalasyon yolları",
    ],
  },

  "supply-chain-security": {
    eyebrow: "Risk ve Uyumluluk",
    title: "Tedarik Zinciri Güvenliği",
    summary: "Yazılımınızı üreten bileşenlere ve hatlara görünürlük.",
    overview: [
      "Yazılım tedarik zincirleri artık çoğu kurumun asla doğrudan incelemediği açık kaynak bağımlılıkları, derleme hatları ve üçüncü taraf bileşenleri içeriyor — bunlardan herhangi biri gerçek ele geçirme noktası haline gelebilir.",
      "Mellivor Tedarik Zinciri Güvenliği, yalnızca yazılımın kendisine değil onu üreten bileşenlere ve süreçlere görünürlük sağlar.",
    ],
    whyItMatters: [
      "Yüksek profilli birkaç tedarik zinciri ele geçirme vakası, tek bir güvenilir güncellemenin aynı anda binlerce alt kuruma nasıl ulaşabileceğini gösterdi — etki alanı yapısal olarak tipik bir ihlalden farklıdır.",
      "Yazılım tedarik zincirlerine yönelik, yazılım malzeme listesi gibi gereksinimler de dahil olmak üzere düzenleyici ilgi hızlanıyor — buradaki görünürlük hızla temel bir beklenti haline geliyor.",
    ],
    challenge: [
      "Bilinmeyen veya yamalanmamış güvenlik açıklarına sahip açık kaynak bağımlılıkları",
      "Yetersiz bütünlük kontrolüne sahip derleme ve dağıtım hatları",
      "Dağıtılan yazılımın içinde gerçekte ne olduğuna dair sınırlı görünürlük",
      "Doğrulanmadan güvenilen tedarikçi ve satıcı yazılım güncellemeleri",
    ],
    approach: [
      "Yazılım malzeme listesi oluşturma ve sürekli bağımlılık izleme",
      "Derleme hattı bütünlük kontrolleri ve erişim kontrolleri",
      "Dağıtımdan önce ve sonra tedarikçi yazılım risk değerlendirmesi",
      "Yeni açıklanan tedarik zinciri güvenlik açıkları için hızlı müdahale süreçleri",
    ],
  },

  "managed-security-services": {
    eyebrow: "Risk ve Uyumluluk",
    title: "Yönetilen Güvenlik Hizmetleri",
    summary: "Mellivor'un platformu ve uzmanlığı, ekibinizin bir uzantısı olarak çalışır.",
    overview: [
      "Her kurumun tam bir iç güvenlik operasyonuna ihtiyacı yoktur — veya bunu personel açısından karşılayamaz. Yönetilen Güvenlik Hizmetleri, Mellivor'un platformunu ve uzmanlığını, gerçekte neye ihtiyacınız olduğuna göre ölçeklenen, ekibinizin operasyonel bir uzantısı olarak sunar.",
      "Bu; Behind24 aracılığıyla günlük izlemeden, işler ters gittiğinde olay müdahalesine ve ortamınız geliştikçe her şeyin çalışır durumda kalmasını sağlayan teknik hesap yönetimine kadar uzanır.",
    ],
    whyItMatters: [
      "Güvenlik yeteneği bulma ve elde tutmanın maliyeti ve zorluğu, çoğu orta ölçekli ve hatta birçok kurumsal organizasyon için tamamen şirket içi kapsamayı pratik olmaktan çıkarır — yönetilen hizmetler genellikle gerçek kapsamaya sahip olmak ile bir boşluğa sahip olmak arasındaki farktır.",
      "Bir güvenlik programının sürdürülen baskı altında dayanıp dayanamayacağını gerçekten belirleyen şey, düzensiz iç çabalar değil tutarlı operasyonel kapsamadır.",
    ],
    challenge: [
      "Operasyonel talebe ayak uyduramayan güvenlik ekibi personel sayısı",
      "Geceler, hafta sonları ve tatillerde kapsama boşlukları",
      "Yalnızca gerçek bir olay sırasında test edilen olay müdahale yeteneği",
      "Diğer BT ve güvenlik öncelikleriyle rekabet eden platform yönetimi",
    ],
    approach: [
      "Behind24 aracılığıyla sunulan yönetilen izleme ve müdahale",
      "Hemen uzman yardıma ihtiyaç duyduğunuzda çağrı üzerine olay müdahalesi",
      "Sürekli platform sağlığı için özel teknik hesap yönetimi",
      "İç ekibinizin kapasitesine göre ölçeklenen esnek katılım modelleri",
    ],
  },
};
