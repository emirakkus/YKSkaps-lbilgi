import type { Question } from "./data";

// Ek soru paketi — mevcut konuların soru sayısını artırır (zenginleştirilmiş içeriğe göre)
export const questionsExtra8: Question[] = [
  // ===== extraCapsules3 konuları (derinleştirme) =====
  // tr31 Tamlamalar
  { id: "q_tr31_5", capsuleId: "tr31", category: "turkce", question: "'Bahçe kapısının kolu' söz öbeği hangi tür tamlamadır?", options: ["Belirtili isim tamlaması", "Zincirleme isim tamlaması", "Sıfat tamlaması", "Belirtisiz isim tamlaması"], correctIndex: 1, explanation: "En az üç ismin iç içe geçtiği bu yapı zincirleme isim tamlamasıdır." },
  { id: "q_tr31_6", capsuleId: "tr31", category: "turkce", question: "Belirtili ile belirtisiz isim tamlamasını ayırmanın kesin yolu nedir?", options: ["Sözcük sayısına bakmak", "Araya sözcük girip giremediğine bakmak", "Sıfat aramak", "Ünlü uyumuna bakmak"], correctIndex: 1, explanation: "Belirtili tamlamada araya sözcük girebilir ('kapının eski kolu'); belirtisizde giremez." },
  // tr32 Ünsüz benzeşmesi
  { id: "q_tr32_5", capsuleId: "tr32", category: "turkce", question: "'seç' sözcüğüne '-gin' eki gelince doğru yazım hangisidir?", options: ["seçgin", "seçkin", "seçğin", "seçtin"], correctIndex: 1, explanation: "Sert ünsüzden sonra 'g' sertleşerek 'k' olur: seç+gin → seçkin." },
  { id: "q_tr32_6", capsuleId: "tr32", category: "turkce", question: "Ünsüz benzeşmesi ile bağlaç olan 'de/da' arasındaki fark nedir?", options: ["Bağlaç da sertleşir", "Bağlaç sertleşmez ve ayrı yazılır", "İkisi de bitişik yazılır", "Fark yoktur"], correctIndex: 1, explanation: "Bağlaç olan 'de/da' asla sertleşmez ve her zaman ayrı yazılır." },
  // mat36 Bölme-kalan
  { id: "q_mat36_5", capsuleId: "mat36", category: "matematik", question: "Bir sayının 100'e bölümünden kalan neye eşittir?", options: ["Birler basamağı", "Son iki basamağı", "Rakamları toplamı", "İlk basamağı"], correctIndex: 1, explanation: "100'e bölümden kalan, sayının son iki basamağıdır." },
  { id: "q_mat36_6", capsuleId: "mat36", category: "matematik", question: "38 sayısı 7'ye bölündüğünde bölüm ve kalan kaçtır?", options: ["Bölüm 5, kalan 3", "Bölüm 4, kalan 10", "Bölüm 6, kalan 1", "Bölüm 5, kalan 4"], correctIndex: 0, explanation: "38 = 7·5 + 3 olduğundan bölüm 5, kalan 3'tür." },
  // mat37 Parabol
  { id: "q_mat37_5", capsuleId: "mat37", category: "matematik", question: "y=x²-4x+3 parabolünün tepe noktasının apsisi kaçtır?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "r = -b/2a = -(-4)/2 = 2." },
  { id: "q_mat37_6", capsuleId: "mat37", category: "matematik", question: "Kökleri 2 ve 6 olan bir parabolün simetri ekseni x kaçtır?", options: ["2", "4", "6", "8"], correctIndex: 1, explanation: "Tepe apsisi köklerin ortalamasıdır: (2+6)/2 = 4." },
  // geo21 Koni-silindir
  { id: "q_geo21_5", capsuleId: "geo21", category: "geometri", question: "Taban yarıçapı 3, yüksekliği 6 olan koninin hacmi kaç π'dir?", options: ["18π", "54π", "9π", "36π"], correctIndex: 0, explanation: "V = (1/3)πr²h = (1/3)π·9·6 = 18π." },
  { id: "q_geo21_6", capsuleId: "geo21", category: "geometri", question: "Koninin yarıçapı 3, yüksekliği 4 ise yan kenarı (ℓ) kaçtır?", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "ℓ² = r² + h² = 9 + 16 = 25 → ℓ = 5." },
  // geo22 Vektörler
  { id: "q_geo22_5", capsuleId: "geo22", category: "geometri", question: "v = (3, 4) vektörünün boyu |v| kaçtır?", options: ["5", "7", "12", "25"], correctIndex: 0, explanation: "|v| = √(3²+4²) = √25 = 5." },
  { id: "q_geo22_6", capsuleId: "geo22", category: "geometri", question: "u = (2, 1) ve v = (3, 4) ise u + v kaçtır?", options: ["(5, 5)", "(6, 4)", "(1, 3)", "(5, 4)"], correctIndex: 0, explanation: "Bileşenler ayrı ayrı toplanır: (2+3, 1+4) = (5, 5)." },
  // fiz23 Atışlar
  { id: "q_fiz23_5", capsuleId: "fiz23", category: "fizik", question: "Eğik atışta menzil hangi açıda en büyük olur?", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "Eğik atışta en büyük menzil 45° atış açısında elde edilir." },
  { id: "q_fiz23_6", capsuleId: "fiz23", category: "fizik", question: "Yatay atışta cismin yörüngesi nasıldır?", options: ["Doğru", "Çember", "Parabol", "Elips"], correctIndex: 2, explanation: "Sabit yatay hız ve serbest düşmenin birleşimi parabolik yörünge oluşturur." },
  // fiz24 İndüksiyon
  { id: "q_fiz24_5", capsuleId: "fiz24", category: "fizik", question: "İndüklenen akımın yönünü belirleyen ve enerji korunumundan gelen yasa hangisidir?", options: ["Ohm yasası", "Lenz yasası", "Pascal ilkesi", "Coulomb yasası"], correctIndex: 1, explanation: "Lenz yasası, indüklenen akımın kendini oluşturan değişime karşı koyacak yönde aktığını söyler." },
  { id: "q_fiz24_6", capsuleId: "fiz24", category: "fizik", question: "Gerilimi sarım oranına göre yükseltip düşüren cihaz hangisidir?", options: ["Jeneratör", "Transformatör", "Pil", "Direnç"], correctIndex: 1, explanation: "Transformatör, elektromanyetik indüksiyonla gerilimi sarım oranına göre değiştirir." },
  // kim21 Molarite
  { id: "q_kim21_5", capsuleId: "kim21", category: "kimya", question: "0,5 litre suda 1 mol madde çözülürse molarite kaç M olur?", options: ["0,5", "1", "2", "4"], correctIndex: 2, explanation: "M = n/V = 1/0,5 = 2 M." },
  { id: "q_kim21_6", capsuleId: "kim21", category: "kimya", question: "Seyreltme işleminde geçerli olan bağıntı hangisidir?", options: ["M₁V₁ = M₂V₂", "P₁V₁ = P₂V₂", "V = I·R", "n = m/M"], correctIndex: 0, explanation: "Seyreltmede çözünen mol sayısı sabit kaldığından M₁V₁ = M₂V₂ geçerlidir." },
  // kim22 Redoks
  { id: "q_kim22_5", capsuleId: "kim22", category: "kimya", question: "Bir redoks tepkimesinde yükseltgenme basamağı artan tür ne yapmıştır?", options: ["Elektron almıştır", "Elektron vermiştir", "Proton almıştır", "Nötron vermiştir"], correctIndex: 1, explanation: "Yükseltgenme basamağı artan tür elektron vermiş, yani yükseltgenmiştir." },
  { id: "q_kim22_6", capsuleId: "kim22", category: "kimya", question: "Kesilen elmanın kararması hangi olayla açıklanır?", options: ["Süblimleşme", "Redoks (yükseltgenme)", "Çözünme", "Erime"], correctIndex: 1, explanation: "Hava oksijeni meyvedeki bileşikleri yükseltger; bu bir redoks olayıdır." },
  // biyo21 Hormonlar
  { id: "q_biyo21_5", capsuleId: "biyo21", category: "biyoloji", question: "Vücudu 'savaş ya da kaç' durumuna hazırlayan hormon hangisidir?", options: ["İnsülin", "Adrenalin", "Tiroksin", "Glukagon"], correctIndex: 1, explanation: "Böbrek üstü bezinden salgılanan adrenalin vücudu tehlikeye/strese hazırlar." },
  { id: "q_biyo21_6", capsuleId: "biyo21", category: "biyoloji", question: "Kan şekerini yükselten hormon hangisidir?", options: ["İnsülin", "Glukagon", "Adrenalin dışı", "Tiroksin"], correctIndex: 1, explanation: "Pankreastan salgılanan glukagon kan şekerini yükseltir; insülin ise düşürür." },
  // biyo22 Ekoloji
  { id: "q_biyo22_5", capsuleId: "biyo22", category: "biyoloji", question: "Ekolojik örgütlenmede popülasyondan bir üst basamak hangisidir?", options: ["Birey", "Komünite", "Ekosistem", "Biyosfer"], correctIndex: 1, explanation: "Sıralama birey → popülasyon → komünite → ekosistem → biyosfer'dir." },
  { id: "q_biyo22_6", capsuleId: "biyo22", category: "biyoloji", question: "Taşıma kapasitesine yaklaşan bir popülasyonun büyümesi nasıl olur?", options: ["Sürekli hızlanır", "Yavaşlar (S biçimli)", "Aniden sıfırlanır", "Hiç değişmez"], correctIndex: 1, explanation: "Kaynaklar sınırlandıkça büyüme yavaşlar; lojistik (S biçimli) büyüme görülür." },
  // tar21 Anadolu uygarlıkları
  { id: "q_tar21_5", capsuleId: "tar21", category: "tarih", question: "Mısır ile Kadeş Antlaşması'nı imzalayan Anadolu uygarlığı hangisidir?", options: ["Frigler", "Hititler", "Lidyalılar", "İyonlar"], correctIndex: 1, explanation: "Kadeş Antlaşması Hititler ile Mısırlılar arasında imzalanmıştır." },
  { id: "q_tar21_6", capsuleId: "tar21", category: "tarih", question: "Thales ve Pisagor gibi bilginler hangi Anadolu uygarlığından yetişmiştir?", options: ["Urartular", "İyonlar", "Frigler", "Lidyalılar"], correctIndex: 1, explanation: "İyonlar bilim, felsefe ve sanatta ilerlemiş; Thales ve Pisagor bu kültürden yetişmiştir." },
  // tar22 Çağdaş Türkiye
  { id: "q_tar22_5", capsuleId: "tar22", category: "tarih", question: "Türkiye AET'ye (bugünkü AB) ortaklık sürecini hangi antlaşmayla başlatmıştır?", options: ["Lozan Antlaşması", "Ankara Antlaşması (1963)", "Mondros", "Kars Antlaşması"], correctIndex: 1, explanation: "1963 Ankara Antlaşması ile AET'ye ortaklık süreci başlamıştır." },
  { id: "q_tar22_6", capsuleId: "tar22", category: "tarih", question: "İlk dürüst çok partili seçim hangi yıl yapılmıştır?", options: ["1946", "1950", "1960", "1923"], correctIndex: 1, explanation: "1946 seçimi tartışmalıdır; ilk dürüst çok partili seçim 1950'de yapılmıştır." },
  // cog21 Ulaşım-turizm
  { id: "q_cog21_5", capsuleId: "cog21", category: "cografya", question: "Turizm gelirlerinin ülke ekonomisine temel katkısı nedir?", options: ["Cari açığı kapatmaya yardımcı olması", "Nüfusu azaltması", "Yağışı artırması", "Deprem riskini düşürmesi"], correctIndex: 0, explanation: "Turizm döviz girdisi sağlayarak cari açığın kapatılmasına katkıda bulunur." },
  { id: "q_cog21_6", capsuleId: "cog21", category: "cografya", question: "'Tarihin sıfır noktası' olarak anılan ve turizmde öne çıkan alan hangisidir?", options: ["Efes", "Göbeklitepe", "Kapadokya", "Truva"], correctIndex: 1, explanation: "Göbeklitepe, bilinen en eski tapınak alanı olarak 'tarihin sıfır noktası' diye anılır." },
  // cog22 Madenler
  { id: "q_cog22_5", capsuleId: "cog22", category: "cografya", question: "Türkiye enerji kaynakları açısından neden dışa bağımlıdır?", options: ["Bor rezervi az olduğu için", "Petrol ve doğal gaz rezervi sınırlı olduğu için", "Linyit olmadığı için", "Su kaynağı olmadığı için"], correctIndex: 1, explanation: "Petrol ve doğal gaz rezervleri sınırlı olduğundan Türkiye enerjide dışa bağımlıdır." },
  { id: "q_cog22_6", capsuleId: "cog22", category: "cografya", question: "Yenilenebilir enerji kaynaklarından biri hangisidir?", options: ["Linyit", "Petrol", "Güneş", "Doğal gaz"], correctIndex: 2, explanation: "Güneş yenilenebilir bir kaynaktır; linyit, petrol ve doğal gaz fosildir." },
  // ede21 Halk hikâyeleri
  { id: "q_ede21_5", capsuleId: "ede21", category: "edebiyat", question: "Halk hikâyelerinde duygu yoğun bölümler nasıl verilir?", options: ["Uzun betimlemelerle", "Türkülerle (şiirle)", "Diyaloglarla", "Mektuplarla"], correctIndex: 1, explanation: "Halk hikâyelerinde nazım-nesir iç içedir; duygu yoğun kısımlar türkülerle verilir." },
  { id: "q_ede21_6", capsuleId: "ede21", category: "edebiyat", question: "Destandan halk hikâyesine geçişin izlerini taşıyan ve UNESCO mirası olan eser hangisidir?", options: ["Dede Korkut Hikâyeleri", "Divanü Lugati't-Türk", "Kutadgu Bilig", "Şehname"], correctIndex: 0, explanation: "Dede Korkut Hikâyeleri, destandan halk hikâyesine geçişi gösteren temel örnektir." },
  // ede22 Bağımsız şairler
  { id: "q_ede22_5", capsuleId: "ede22", category: "edebiyat", question: "'Kaldırımlar' şiiriyle tanınan bağımsız şair kimdir?", options: ["Yahya Kemal", "Necip Fazıl Kısakürek", "Ahmet Haşim", "Orhan Veli"], correctIndex: 1, explanation: "'Kaldırımlar', Necip Fazıl Kısakürek'in en tanınan şiiridir." },
  { id: "q_ede22_6", capsuleId: "ede22", category: "edebiyat", question: "'Saf şiir' anlayışıyla resim gibi imgeler kuran, sembolizmden etkilenen şair kimdir?", options: ["Ahmet Haşim", "Nazım Hikmet", "Yaşar Kemal", "Şinasi"], correctIndex: 0, explanation: "Ahmet Haşim, saf şiir anlayışı ve sembolist imgeleriyle tanınır ('Merdiven', 'O Belde')." },
  // fel18 Toplum felsefesi
  { id: "q_fel18_5", capsuleId: "fel18", category: "felsefe", question: "Toplumu, bireylerden bağımsız kendine özgü kuralları olan bir bütün sayan yaklaşım hangisidir?", options: ["Bireyci yaklaşım", "Toplumcu (organik) yaklaşım", "Şüpheci yaklaşım", "Bilinemezci yaklaşım"], correctIndex: 1, explanation: "Toplumcu/organik yaklaşım, toplumu bireylerin toplamından fazlası olarak görür." },
  { id: "q_fel18_6", capsuleId: "fel18", category: "felsefe", question: "İbn Haldun'un kurduğu, toplumların doğuş-yükseliş-çöküşünü inceleyen ilim hangisidir?", options: ["Umran ilmi", "Mantık", "Metafizik", "Estetik"], correctIndex: 0, explanation: "İbn Haldun, 'Mukaddime'de toplum yasalarını inceleyen 'umran ilmi'ni kurmuştur." },
  // fel19 Atomculuk
  { id: "q_fel19_5", capsuleId: "fel19", category: "felsefe", question: "Atomculara göre farklı maddelerin oluşması neye bağlıdır?", options: ["Atomların rengine", "Atomların biçim, sıralanış ve dizilişine", "Tanrısal tasarıma", "Suyun oranına"], correctIndex: 1, explanation: "Atomculara göre maddeler, atomların biçim, sıralanış ve dizilişindeki farktan oluşur." },
  { id: "q_fel19_6", capsuleId: "fel19", category: "felsefe", question: "Atomculuk hangi felsefi yaklaşıma örnektir?", options: ["İdealizm", "Materyalizm", "Septisizm", "Mistisizm"], correctIndex: 1, explanation: "Atomculuk, evreni mekanik yasalarla açıklayan ilk materyalist yaklaşımlardandır." },

  // ===== Temel konulara ek sorular =====
  // tr1 Mecaz
  { id: "q_tr1_d", capsuleId: "tr1", category: "turkce", question: "'Bu haber ortalığı karıştırdı.' cümlesinde 'karıştırmak' hangi anlamdadır?", options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Yan anlam"], correctIndex: 1, explanation: "'Karıştırmak' burada 'huzursuzluk yaratmak' anlamında mecazdır." },
  { id: "q_tr1_e", capsuleId: "tr1", category: "turkce", question: "Mecaz anlam ile yan anlam arasındaki fark nedir?", options: ["İkisi aynıdır", "Mecaz gerçek anlamdan tümüyle kopar, yan anlam ilişkilidir", "Yan anlam gerçek anlamdan kopar", "Mecaz yalnız fiillerde olur"], correctIndex: 1, explanation: "Yan anlam gerçek anlamla ilişkilidir; mecaz ise gerçek anlamdan tamamen kopar." },
  // tr2 Ögeler
  { id: "q_tr2_d", capsuleId: "tr2", category: "turkce", question: "'Yağmur sabaha kadar yağdı.' cümlesinde 'sabaha kadar' hangi ögedir?", options: ["Özne", "Nesne", "Zarf tümleci", "Dolaylı tümleç"], correctIndex: 2, explanation: "Yükleme 'ne kadar/ne zamana kadar' sorusu bu ögeyi bulur; zarf tümlecidir." },
  { id: "q_tr2_e", capsuleId: "tr2", category: "turkce", question: "Öge bulurken sözcük gruplarıyla ilgili nasıl davranılır?", options: ["Bölünerek incelenir", "Bölünmeden bir bütün olarak alınır", "Yalnız ilk sözcük alınır", "Atlanır"], correctIndex: 1, explanation: "Öge bulurken sözcük grupları (tamlamalar, deyimler) bölünmeden bir bütün alınır." },
  // mat1 Çarpanlara ayırma
  { id: "q_mat1_d", capsuleId: "mat1", category: "matematik", question: "x² - 16 ifadesinin çarpanları nedir?", options: ["(x-4)(x+4)", "(x-8)(x+8)", "(x-4)²", "(x-16)(x+1)"], correctIndex: 0, explanation: "İki kare farkı: x²-4² = (x-4)(x+4)." },
  { id: "q_mat1_e", capsuleId: "mat1", category: "matematik", question: "x²-5x+6 ifadesi çarpanlarına nasıl ayrılır?", options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-6)", "(x-2)(x+3)"], correctIndex: 0, explanation: "Toplamı -5, çarpımı 6 olan -2 ve -3 kullanılır: (x-2)(x-3)." },
  // fiz1 Newton
  { id: "q_fiz1_d", capsuleId: "fiz1", category: "fizik", question: "Kütlesi 5 kg olan cisme 20 N net kuvvet uygulanırsa ivmesi kaç m/s²'dir?", options: ["2", "4", "15", "100"], correctIndex: 1, explanation: "a = F/m = 20/5 = 4 m/s²." },
  { id: "q_fiz1_e", capsuleId: "fiz1", category: "fizik", question: "Aşağı ivmelenen bir asansördeki cisme etkiyen tepki kuvveti (N) nasıl ifade edilir?", options: ["N = m(g+a)", "N = m(g-a)", "N = m·g", "N = m·a"], correctIndex: 1, explanation: "Aşağı ivmede N = m(g−a) olur." },
  // kim2 Mol
  { id: "q_kim2_d", capsuleId: "kim2", category: "kimya", question: "3 mol maddede kaç tane tanecik bulunur?", options: ["6,022×10²³", "1,8×10²⁴", "3×10²³", "2×10²³"], correctIndex: 1, explanation: "3 × 6,022×10²³ ≈ 1,8×10²⁴ tanecik." },
  { id: "q_kim2_e", capsuleId: "kim2", category: "kimya", question: "NK'da 0,5 mol gazın hacmi kaç litredir?", options: ["11,2 L", "22,4 L", "44,8 L", "5,6 L"], correctIndex: 0, explanation: "0,5 × 22,4 = 11,2 L." },
  // biyo1 Organeller
  { id: "q_biyo1_d", capsuleId: "biyo1", category: "biyoloji", question: "Hücrede salgı maddelerini paketleyip dışarı gönderen organel hangisidir?", options: ["Ribozom", "Golgi cisimciği", "Mitokondri", "Lizozom"], correctIndex: 1, explanation: "Golgi cisimciği salgıları paketler ve hücre dışına gönderilmesini sağlar." },
  { id: "q_biyo1_e", capsuleId: "biyo1", category: "biyoloji", question: "Hücre içi sindirimden sorumlu, sindirim enzimi taşıyan organel hangisidir?", options: ["Lizozom", "Ribozom", "Kloroplast", "Çekirdek"], correctIndex: 0, explanation: "Lizozom, sindirim enzimleri içerir ve hücre içi sindirimi gerçekleştirir." },
  // tar1 Kurtuluş Savaşı
  { id: "q_tar1_d", capsuleId: "tar1", category: "tarih", question: "Batı Cephesi'nde düzenli ordunun kazandığı meydan savaşı hangisidir?", options: ["Çaldıran", "Sakarya", "Malazgirt", "Mohaç"], correctIndex: 1, explanation: "Sakarya Meydan Muharebesi Batı Cephesi'nde düzenli ordunun kazandığı savaştır." },
  { id: "q_tar1_e", capsuleId: "tar1", category: "tarih", question: "Doğu Cephesi hangi devletle yapılan mücadeleyi kapsar?", options: ["Yunanistan", "Fransa", "Ermeniler", "İngiltere"], correctIndex: 2, explanation: "Doğu Cephesi'nde Ermenilerle mücadele edilmiş ve Gümrü Antlaşması imzalanmıştır." },
  // cog2 İklim
  { id: "q_cog2_d", capsuleId: "cog2", category: "cografya", question: "Bozkır (step) bitki örtüsü hangi iklimin göstergesidir?", options: ["Akdeniz iklimi", "Karadeniz iklimi", "Karasal iklim", "Ekvatoral iklim"], correctIndex: 2, explanation: "Yazları kurak geçen karasal iklimin doğal bitki örtüsü bozkırdır (step)." },
  { id: "q_cog2_e", capsuleId: "cog2", category: "cografya", question: "Türkiye'de her mevsim yağışlı olan iklim hangisidir?", options: ["Akdeniz", "Karadeniz", "Karasal", "Çöl"], correctIndex: 1, explanation: "Karadeniz iklimi her mevsim yağışlıdır." },
  // ede1 Söz sanatları
  { id: "q_ede1_d", capsuleId: "ede1", category: "edebiyat", question: "'Ay, bulutların arasından bize gülümsüyordu.' dizesinde hangi sanat vardır?", options: ["Teşbih", "Teşhis (kişileştirme)", "Kinaye", "Tezat"], correctIndex: 1, explanation: "Ay'a insana özgü 'gülümseme' verildiği için teşhis vardır." },
  { id: "q_ede1_e", capsuleId: "ede1", category: "edebiyat", question: "Teşbihte 'gibi, kadar, sanki' gibi sözcükler hangi ögeyi oluşturur?", options: ["Benzeyen", "Benzetilen", "Benzetme yönü", "Benzetme edatı"], correctIndex: 3, explanation: "'gibi, kadar, sanki' teşbihin benzetme edatı ögesidir." },
  // fel1 Bilgi felsefesi
  { id: "q_fel1_d", capsuleId: "fel1", category: "felsefe", question: "Empirizmin önemli temsilcilerinden biri kimdir?", options: ["Descartes", "Locke", "Spinoza", "Leibniz"], correctIndex: 1, explanation: "Locke ve Hume empirizmin (deneyci akım) önemli temsilcileridir." },
  { id: "q_fel1_e", capsuleId: "fel1", category: "felsefe", question: "Kesin ve genel-geçer bilginin imkânsız olduğunu savunan görüş hangisidir?", options: ["Rasyonalizm", "Empirizm", "Septisizm (şüphecilik)", "Kritisizm"], correctIndex: 2, explanation: "Septisizm (şüphecilik), kesin bilginin mümkün olmadığını savunur." },
];
