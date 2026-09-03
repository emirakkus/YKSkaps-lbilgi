import { extraCapsules } from "./capsulesExtra";
import { extraCapsules2 } from "./capsulesExtra2";
import { extraCapsules3 } from "./capsulesExtra3";
import { extraCapsules4 } from "./capsulesExtra4";
import { extraCapsules5 } from "./capsulesExtra5";
import { questionsExtra } from "./questionsExtra";
import { questionsExtra2 } from "./questionsExtra2";
import { questionsExtra3 } from "./questionsExtra3";
import { questionsExtra4 } from "./questionsExtra4";
import { questionsExtra5 } from "./questionsExtra5";
import { questionsExtra6 } from "./questionsExtra6";
import { questionsExtra7 } from "./questionsExtra7";
import { questionsExtra8 } from "./questionsExtra8";
import { questionsExtra9 } from "./questionsExtra9";
import { questionsExtra10 } from "./questionsExtra10";

export type Capsule = {
  id: string;
  category: string;
  title: string;
  summary: string;
  detail: string;
  funFact: string; // "Sınav ipucu"
  tags: string[]; // anahtar_kelimeler
  difficulty: "Temel" | "Orta" | "İleri";
};

export type Question = {
  id: string;
  capsuleId: string;
  category: string;
  question: string; // soru_metni
  options: string[]; // secenekler
  correctIndex: number; // dogru_cevap
  explanation: string; // cozum_aciklamasi
  hint?: string; // ipucu
  difficulty?: "Kolay" | "Orta" | "Zor";
};

// Ortalama okuma hızına göre kapsül okuma süresini (dk) hesaplar
export function getReadingTime(c: Capsule): number {
  const words = `${c.summary} ${c.detail} ${c.funFact}`.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 130));
}

// Kapsül zorluğunu soru zorluğuna eşler
export function mapDifficulty(d: Capsule["difficulty"]): "Kolay" | "Orta" | "Zor" {
  return d === "Temel" ? "Kolay" : d === "İleri" ? "Zor" : "Orta";
}

// YKS sınav tarihi (tahmini) - geri sayım için
export const YKS_DATE = "2027-06-19T10:15:00+03:00";

export const categories = [
  { id: "turkce", name: "Türkçe", emoji: "📖", exam: "TYT", color: "from-rose-500 to-pink-600" },
  { id: "matematik", name: "Matematik", emoji: "➗", exam: "TYT/AYT", color: "from-indigo-500 to-violet-600" },
  { id: "geometri", name: "Geometri", emoji: "📐", exam: "TYT/AYT", color: "from-sky-500 to-blue-600" },
  { id: "fizik", name: "Fizik", emoji: "🧲", exam: "TYT/AYT", color: "from-cyan-500 to-teal-600" },
  { id: "kimya", name: "Kimya", emoji: "⚗️", exam: "TYT/AYT", color: "from-emerald-500 to-green-600" },
  { id: "biyoloji", name: "Biyoloji", emoji: "🧬", exam: "TYT/AYT", color: "from-lime-500 to-emerald-600" },
  { id: "tarih", name: "Tarih", emoji: "🏛️", exam: "TYT/AYT", color: "from-amber-500 to-orange-600" },
  { id: "cografya", name: "Coğrafya", emoji: "🌍", exam: "TYT/AYT", color: "from-teal-500 to-cyan-600" },
  { id: "edebiyat", name: "Edebiyat", emoji: "✒️", exam: "AYT", color: "from-fuchsia-500 to-purple-600" },
  { id: "felsefe", name: "Felsefe", emoji: "🤔", exam: "TYT/AYT", color: "from-slate-500 to-slate-700" },
];

const baseCapsules: Capsule[] = [
  // ---------------- TÜRKÇE ----------------
  {
    id: "tr1",
    category: "turkce",
    title: "Sözcükte Anlam: Mecaz",
    summary: "Bir sözcüğün gerçek anlamından tamamen uzaklaşarak başka bir kavramı karşılamasına mecaz anlam denir.",
    detail:
      "Gerçek (temel) anlam sözcüğün akla ilk gelen anlamıdır. Yan anlam gerçek anlamla ilişkilidir (örn. 'gözün' iğne gözü olması). Mecaz anlamda ise sözcük gerçek anlamından tümüyle kopar: 'Bu işin altından kalkamadı' cümlesinde 'kalkmak' başarma anlamındadır.",
    funFact: "Sınavda 'gerçek anlamıyla kullanılmıştır' diyen seçeneklerde tuzak sık olur; sözcüğü zihinde canlandırabiliyorsan genellikle gerçek anlamdır.",
    tags: ["sözcükte anlam", "mecaz", "anlam bilgisi"],
    difficulty: "Temel",
  },
  {
    id: "tr2",
    category: "turkce",
    title: "Cümlenin Ögeleri",
    summary: "Yükleme 'ne, kim' soruları özneyi; 'neyi, kimi' belirtili nesneyi; 'kime, nerede, neden' dolaylı/zarf tümlecini bulur.",
    detail:
      "Önce yüklem bulunur. Sonra yükleme 'kim/ne' sorulur → özne. 'Neyi/kimi' → belirtili nesne, 'ne' → belirtisiz nesne. 'Kime, kimden, nerede, nereye' → dolaylı tümleç. 'Ne zaman, nasıl, neden, ne kadar' → zarf tümleci. Öge bulurken sözcük gruplarını bölme!",
    funFact: "Nesne yalnızca geçişli fiillerde olur. Yükleme 'neyi/kimi' sorusu anlamlı cevap vermiyorsa nesne yoktur.",
    tags: ["cümlenin ögeleri", "özne", "nesne", "yüklem"],
    difficulty: "Orta",
  },
  {
    id: "tr3",
    category: "turkce",
    title: "Anlatım Bozuklukları",
    summary: "Gereksiz sözcük, özne-yüklem uyumsuzluğu, tamlama yanlışı ve mantık hatası en sık çıkan bozukluk türleridir.",
    detail:
      "Gereksiz kullanım: 'yaklaşık 3-5 civarında'. Özne-yüklem uyumsuzluğu: 'Öğrenciler ve öğretmen geldiler' yerine 'geldi'. Tamlama yanlışı: 'ekonomik ve siyasi ilişkiler' gibi ortak tamlanan gerektiren yerlerde. Mantık hatası ve sıralama yanlışları da dikkat ister.",
    funFact: "Cümlede 'sadece, yalnızca, bir tek' gibi sözcükler varsa yeri değişince anlam değişir; anlatım bozukluğu sorularında sık kullanılır.",
    tags: ["anlatım bozukluğu", "dil bilgisi"],
    difficulty: "Orta",
  },
  {
    id: "tr4",
    category: "turkce",
    title: "Yazım Kuralları: 'de' ve 'ki'",
    summary: "Bağlaç olan 'de' ve 'ki' ayrı; hâl eki '-de' ve ilgi eki '-ki' bitişik yazılır.",
    detail:
      "'de' bağlacı 'da/de' şeklinde çıkarılabiliyorsa ayrı yazılır: 'Ben de geldim'. Bulunma hâli eki bitişiktir: 'evde'. 'ki' bağlacı ayrı ('Duydum ki...'), ilgi ve sıfat yapan '-ki' bitişiktir: 'benimki', 'akşamki'. 'Oysaki, mademki, halbuki, sanki' kalıplaşmış, bitişik yazılır.",
    funFact: "'-ki' bitişik mi ayrı mı? Sözcükten çıkarınca cümle bozulmuyorsa bağlaçtır, ayrı yazılır.",
    tags: ["yazım kuralları", "de ki", "imla"],
    difficulty: "Temel",
  },
  {
    id: "tr5",
    category: "turkce",
    title: "Paragrafta Ana Düşünce",
    summary: "Ana düşünce, yazarın okura vermek istediği temel mesajdır; genellikle paragrafın tamamına yayılır.",
    detail:
      "Ana düşünceyi bulmak için 'Yazar bunu neden yazdı?' sorusunu sor. Yardımcı düşünceler ana düşünceyi destekler. 'Bu parçadan çıkarılamaz' sorularında dört seçenek metinde vardır, biri yoktur; metne dönerek eleme yapılır.",
    funFact: "Paragraf sorularında önce soruyu, sonra parçayı oku; ne aradığını bilerek okumak süre kazandırır.",
    tags: ["paragraf", "ana düşünce", "okuduğunu anlama"],
    difficulty: "Orta",
  },

  // ---------------- MATEMATİK ----------------
  {
    id: "mat1",
    category: "matematik",
    title: "Çarpanlara Ayırma Kimlikleri",
    summary: "a²−b²=(a−b)(a+b), a²±2ab+b²=(a±b)², a³±b³=(a±b)(a²∓ab+b²).",
    detail:
      "İki kare farkı en sık kullanılan kimliktir. Tam kare ifadeleri hızlı tanımak için ortadaki terimin 2·(kök·kök) olup olmadığına bak. Küp toplam/farkında işaret sırası önemlidir: a³+b³=(a+b)(a²−ab+b²).",
    funFact: "x²+1/x² sorularında (x+1/x)²=x²+2+1/x² kimliğini kullan; çok zaman kazandırır.",
    tags: ["çarpanlara ayırma", "özdeşlik", "cebir"],
    difficulty: "Orta",
  },
  {
    id: "mat2",
    category: "matematik",
    title: "Fonksiyonlarda Bileşke ve Ters",
    summary: "(f∘g)(x)=f(g(x)) sağdan içe uygulanır. (f∘g)⁻¹ = g⁻¹∘f⁻¹.",
    detail:
      "Bileşke fonksiyon soldan sağa değil, içten dışa hesaplanır: önce g, sonra f. Ters fonksiyon için y ile x yer değiştirilip x çözülür. Bir fonksiyonun tersinin olması için birebir ve örten olması gerekir.",
    funFact: "(f∘g)(x)=x ise f ile g birbirinin tersidir; bu, ters sorularında hızlı çözüm sağlar.",
    tags: ["fonksiyon", "bileşke", "ters fonksiyon"],
    difficulty: "İleri",
  },
  {
    id: "mat3",
    category: "matematik",
    title: "Olasılık Temelleri",
    summary: "P(A)=istenen durum / tüm durumlar. 0 ≤ P(A) ≤ 1 ve P(A)+P(A')=1.",
    detail:
      "Bağımsız olaylarda P(A ve B)=P(A)·P(B). Ayrık (birbirini engelleyen) olaylarda P(A veya B)=P(A)+P(B). Karmaşık sorularda 'en az bir' ifadesi görürsen tümleyenden (1 − hiçbiri) gitmek daha kolaydır.",
    funFact: "'En az 1' → 1 − (hiç olmama olasılığı). Bu yaklaşım işlem yükünü ciddi azaltır.",
    tags: ["olasılık", "sayma", "permütasyon"],
    difficulty: "Orta",
  },
  {
    id: "mat4",
    category: "matematik",
    title: "Türev Kuralları",
    summary: "(xⁿ)'=n·xⁿ⁻¹, (f·g)'=f'g+fg', (f/g)'=(f'g−fg')/g².",
    detail:
      "Zincir kuralı: (f(g(x)))'=f'(g(x))·g'(x). Türevin sıfır olduğu noktalar yerel maksimum/minimum adaylarıdır. İkinci türev pozitifse min, negatifse maks. Türev, bir noktadaki eğimi ve anlık değişim hızını verir.",
    funFact: "Bir fonksiyonun artan/azalan olduğu aralıkları türevin işaretiyle bul: f'(x)>0 artan, f'(x)<0 azalan.",
    tags: ["türev", "AYT", "analiz"],
    difficulty: "İleri",
  },
  {
    id: "mat5",
    category: "matematik",
    title: "Sayı Basamakları",
    summary: "İki basamaklı bir sayı 10a+b, üç basamaklı sayı 100a+10b+c biçiminde yazılır.",
    detail:
      "Rakamları yer değiştiren sayılarda: (10a+b) − (10b+a) = 9(a−b). Bu 9'un katı çıkması sık sorulan bir tuzaktır. Bir sayının rakamları toplamı 9'un katıysa sayı 9'a; 3'ün katıysa 3'e tam bölünür.",
    funFact: "Rakamları ters çevrilen iki basamaklı sayıların farkı daima 9'un katıdır — bunu ezberle.",
    tags: ["sayılar", "basamak", "bölünebilme"],
    difficulty: "Temel",
  },

  // ---------------- GEOMETRİ ----------------
  {
    id: "geo1",
    category: "geometri",
    title: "Pisagor ve Özel Üçgenler",
    summary: "Dik üçgende a²+b²=c². 3-4-5, 5-12-13, 8-15-17 üçlüleri sık çıkar.",
    detail:
      "30-60-90 üçgeninde kenar oranları 1 : √3 : 2. 45-45-90 üçgeninde 1 : 1 : √2. Bu oranlar ezberlendiğinde birçok soru hesap yapmadan çözülür. Öklid bağıntıları da dik üçgende yükseklikle ilgili sonuçlar verir.",
    funFact: "Bir kenar uzunluğu √ içeriyorsa büyük olasılıkla 30-60-90 veya 45-45-90 üçgeni vardır.",
    tags: ["üçgen", "pisagor", "dik üçgen"],
    difficulty: "Orta",
  },
  {
    id: "geo2",
    category: "geometri",
    title: "Çemberde Açılar",
    summary: "Merkez açı, gördüğü yayın tamamına eşittir; çevre açı ise yayın yarısıdır.",
    detail:
      "Aynı yayı gören çevre açılar birbirine eşittir. Çapı gören çevre açı 90°'dir (Thales). Teğet-kiriş açısı, gördüğü yayın yarısıdır. Kirişler dörtgeninde karşılıklı açılar toplamı 180°'dir.",
    funFact: "Çember sorularında çapı gördüğün an 90°'yi işaretle; bu bilgi çoğu soruyu kilitler.",
    tags: ["çember", "açı", "geometri"],
    difficulty: "Orta",
  },
  {
    id: "geo3",
    category: "geometri",
    title: "Alan Formülleri",
    summary: "Üçgen: (taban·yükseklik)/2. Yamuk: [(a+c)/2]·h. Daire: π·r².",
    detail:
      "Paralelkenar alanı taban·yükseklik. Eşkenar üçgen alanı (a²√3)/4. İki kenar ve arasındaki açı biliniyorsa üçgen alanı (1/2)·a·b·sinC. Alan sorularında yükseklikleri ortak tabana indirmek işi kolaylaştırır.",
    funFact: "Tabanları eşit iki üçgenin alan oranı yükseklik oranına eşittir — parçalı alan sorularında altın kural.",
    tags: ["alan", "üçgen", "dörtgen"],
    difficulty: "Orta",
  },

  // ---------------- FİZİK ----------------
  {
    id: "fiz1",
    category: "fizik",
    title: "Newton'un Hareket Yasaları",
    summary: "1: Eylemsizlik. 2: F=m·a. 3: Etki-tepki (eşit büyüklük, zıt yön).",
    detail:
      "Net kuvvet sıfırsa cisim ya durur ya sabit hızla gider (denge). F=m·a ile ivme bulunur. Etki-tepki kuvvetleri farklı cisimlere etkir, bu yüzden birbirini götürmez. Sürtünme kuvveti harekete zıt yöndedir: f=μ·N.",
    funFact: "Asansör sorularında yukarı ivmede N=m(g+a), aşağı ivmede N=m(g−a); bu iki kalıp çoğu soruyu çözer.",
    tags: ["kuvvet", "hareket", "Newton"],
    difficulty: "Orta",
  },
  {
    id: "fiz2",
    category: "fizik",
    title: "Enerji ve Korunum",
    summary: "Kinetik enerji Ek=½mv², potansiyel Ep=m·g·h. Sürtünmesiz ortamda toplam enerji korunur.",
    detail:
      "İş W=F·x·cosθ. Güç P=W/t. Enerjinin korunumu: sürtünme yoksa Ek+Ep sabittir. Sürtünme varsa kaybolan mekanik enerji ısıya dönüşür. Serbest düşen cisimde en üstte Ep maks, en altta Ek maks.",
    funFact: "Sürtünmesiz eğik düzlemde cismin en alttaki hızı, yalnızca yüksekliğe bağlıdır: v=√(2gh).",
    tags: ["enerji", "iş", "korunum"],
    difficulty: "Orta",
  },
  {
    id: "fiz3",
    category: "fizik",
    title: "Elektrik: Ohm Yasası",
    summary: "V=I·R. Seri bağlamada dirençler toplanır; paralelde tersleri toplanır.",
    detail:
      "Seri devrede akım her yerde aynı, gerilim paylaşılır. Paralel devrede gerilim aynı, akım paylaşılır. Toplam direnç: seri R=R1+R2, paralel 1/R=1/R1+1/R2. Harcanan güç P=V·I=I²·R.",
    funFact: "Paralel bağlı iki eşit direnç birinin yarısına eşittir; bu kısayol devre sorularında hız kazandırır.",
    tags: ["elektrik", "direnç", "devre"],
    difficulty: "İleri",
  },

  // ---------------- KİMYA ----------------
  {
    id: "kim1",
    category: "kimya",
    title: "Periyodik Sistem Eğilimleri",
    summary: "Periyodik cetvelde soldan sağa atom yarıçapı azalır, iyonlaşma enerjisi artar.",
    detail:
      "Yukarıdan aşağıya atom yarıçapı artar (yeni katman eklenir). Elektronegatiflik sağ üste doğru artar (F en yüksek). Metaller sol ve alt tarafta, ametaller sağ üstte yoğunlaşır. Soy gazlar kararlı yapıdadır.",
    funFact: "İyonlaşma enerjisinde 2A ve 5A gruplarında beklenmedik yükseklikler olur; kararlı yarı dolu/dolu orbital yüzünden.",
    tags: ["periyodik sistem", "atom", "eğilim"],
    difficulty: "Orta",
  },
  {
    id: "kim2",
    category: "kimya",
    title: "Mol Kavramı",
    summary: "1 mol = 6,022×10²³ tanecik = molekül kütlesi kadar gram = NK'da 22,4 L gaz.",
    detail:
      "Mol sayısı n = kütle / mol kütlesi. Gazlarda normal koşullarda (0°C, 1 atm) 1 mol 22,4 litredir. Avogadro sayısı taneciğin türünden bağımsızdır. Kimyasal denklemlerde katsayılar mol oranını verir.",
    funFact: "Sınavda 'NK' (normal koşullar) ifadesini gördüysen 22,4 L/mol dönüşümü büyük ihtimalle gerekecektir.",
    tags: ["mol", "avogadro", "stokiyometri"],
    difficulty: "Orta",
  },
  {
    id: "kim3",
    category: "kimya",
    title: "Asit-Baz",
    summary: "Asitler H⁺ verir (pH<7), bazlar OH⁻ verir (pH>7). pH+pOH=14.",
    detail:
      "Kuvvetli asit/bazlar suda tamamen iyonlaşır. pH = −log[H⁺]. Nötrleşmede asit+baz → tuz+su. Kuvvetli asit-kuvvetli baz tuzu nötr, kuvvetli asit-zayıf baz tuzu asidik çözelti verir.",
    funFact: "[H⁺] 10 kat artarsa pH 1 birim azalır; logaritmik ölçek olduğunu unutma.",
    tags: ["asit", "baz", "pH"],
    difficulty: "İleri",
  },

  // ---------------- BİYOLOJİ ----------------
  {
    id: "biyo1",
    category: "biyoloji",
    title: "Hücre: Organeller",
    summary: "Mitokondri enerji (ATP) üretir; ribozom protein sentezler; kloroplast fotosentez yapar.",
    detail:
      "Bitki hücresinde hücre çeperi, kloroplast ve büyük koful bulunur; hayvan hücresinde sentrozom ve lizozom belirgindir. Endoplazmik retikulum madde taşır (granüllü RE protein, granülsüz RE lipit ile ilgili). Golgi salgı paketler.",
    funFact: "Mitokondri ve kloroplastın kendi DNA'sı vardır; bu, endosimbiyoz teorisinin kanıtı olarak sorulur.",
    tags: ["hücre", "organel", "mitokondri"],
    difficulty: "Temel",
  },
  {
    id: "biyo2",
    category: "biyoloji",
    title: "Kalıtım: Mendel",
    summary: "Baskın-çekinik ilişkisinde melez (Aa) döllerin çaprazında 3:1 fenotip oranı çıkar.",
    detail:
      "Homozigot (AA, aa) saf döl, heterozigot (Aa) melezdir. Dihibrit çaprazlamada (AaBb × AaBb) 9:3:3:1 oranı görülür. Eş baskınlıkta iki alel de fenotipte görünür (AB kan grubu gibi). Çaprazlama sorularında Punnett karesi güvenlidir.",
    funFact: "İnsanda cinsiyet XY sistemiyle belirlenir; X'e bağlı çekinik hastalıklar (renk körlüğü, hemofili) erkeklerde daha sık görülür.",
    tags: ["kalıtım", "mendel", "genetik"],
    difficulty: "Orta",
  },
  {
    id: "biyo3",
    category: "biyoloji",
    title: "Fotosentez ve Solunum",
    summary: "Fotosentez: CO₂+H₂O + ışık → glikoz+O₂. Solunum bunun tersidir.",
    detail:
      "Fotosentez kloroplastta gerçekleşir, ışık enerjisini kimyasal enerjiye çevirir. Oksijenli solunum mitokondride glikozu parçalayıp ATP üretir. Fotosentez hızı ışık şiddeti, CO₂ ve sıcaklıkla belirli bir noktaya kadar artar.",
    funFact: "Fotosentezde açığa çıkan oksijen sudan (H₂O) gelir, CO₂'den değil — işaretli atom deneyleriyle kanıtlanmıştır.",
    tags: ["fotosentez", "solunum", "metabolizma"],
    difficulty: "Orta",
  },

  // ---------------- TARİH ----------------
  {
    id: "tar1",
    category: "tarih",
    title: "Kurtuluş Savaşı Cepheleri",
    summary: "Doğu (Ermeniler), Güney (Fransızlar) ve Batı (Yunanlar) olmak üzere üç cephe vardır.",
    detail:
      "Doğu Cephesi'nde Kâzım Karabekir başarı sağladı, Gümrü Antlaşması imzalandı (ilk siyasi başarı). Güney Cephesi düzenli ordu değil, halk (Kuvâ-yi Milliye) direnişiyle yürüdü. Batı Cephesi'nde düzenli ordu Yunan kuvvetleriyle savaştı (I.-II. İnönü, Sakarya, Büyük Taarruz).",
    funFact: "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e 'Gazi' unvanı ve mareşallik rütbesi verildi.",
    tags: ["kurtuluş savaşı", "cephe", "inkılap tarihi"],
    difficulty: "Orta",
  },
  {
    id: "tar2",
    category: "tarih",
    title: "İlk Türk Devletleri",
    summary: "Asya Hun, Göktürk ve Uygurlar Orta Asya'daki başlıca Türk devletleridir.",
    detail:
      "Göktürkler, tarihte 'Türk' adını devlet adı olarak kullanan ilk devlettir. Orhun Yazıtları (Orhun Abideleri) Türk tarihinin ilk yazılı belgeleridir ve Göktürklere aittir. Uygurlar yerleşik hayata geçen ilk Türk topluluğudur ve matbaayı kullanmışlardır.",
    funFact: "'Türk' adının geçtiği ilk yazılı Türkçe metin Orhun Yazıtları'dır; bu ayrıntı sık sorulur.",
    tags: ["ilk türk devletleri", "göktürk", "orhun"],
    difficulty: "Temel",
  },
  {
    id: "tar3",
    category: "tarih",
    title: "Osmanlı Kuruluş Dönemi",
    summary: "Osmanlı Devleti 1299'da kuruldu; Koyunhisar ilk önemli savaştır.",
    detail:
      "Orhan Bey döneminde ilk medrese (İznik) ve ilk düzenli ordu kuruldu. I. Murat döneminde Rumeli'de fetihler hızlandı, Kosova Savaşı kazanıldı. Ankara Savaşı (1402) Timur'a karşı kaybedilince Fetret Devri yaşandı.",
    funFact: "Fetret Devri (1402-1413), Osmanlı'da taht kavgalarının yaşandığı, devletin dağılma tehlikesi geçirdiği dönemdir.",
    tags: ["osmanlı", "kuruluş", "genel tarih"],
    difficulty: "Orta",
  },

  // ---------------- COĞRAFYA ----------------
  {
    id: "cog1",
    category: "cografya",
    title: "Türkiye'nin Konumu",
    summary: "Türkiye 36°-42° kuzey paralelleri, 26°-45° doğu meridyenleri arasındadır.",
    detail:
      "Özel konum: üç tarafı denizlerle çevrili, Asya-Avrupa arasında köprü, boğazlara sahip. Matematik konum iklimi, gece-gündüz sürelerini ve yerel saati etkiler. Doğu ile batı arasında yaklaşık 76 dakikalık yerel saat farkı vardır (19° × 4 dk).",
    funFact: "Türkiye'de güneş en erken doğudan (Iğdır civarı) doğar; batıya doğru gidildikçe geç doğar.",
    tags: ["konum", "türkiye", "coğrafi konum"],
    difficulty: "Temel",
  },
  {
    id: "cog2",
    category: "cografya",
    title: "İklim Tipleri",
    summary: "Türkiye'de Akdeniz, Karadeniz ve Karasal olmak üzere üç ana iklim görülür.",
    detail:
      "Karadeniz iklimi her mevsim yağışlıdır. Akdeniz iklimi yazları sıcak-kurak, kışları ılık-yağışlıdır. Karasal iklimde kışlar soğuk, yaz-kış ve gece-gündüz sıcaklık farkı fazladır. Yağış rejimi bitki örtüsünü belirler (maki, orman, bozkır).",
    funFact: "Maki bitki örtüsü Akdeniz ikliminin, gür ormanlar Karadeniz'in, bozkır (step) ise karasal iklimin göstergesidir.",
    tags: ["iklim", "yağış", "bitki örtüsü"],
    difficulty: "Orta",
  },
  {
    id: "cog3",
    category: "cografya",
    title: "Nüfus ve Yerleşme",
    summary: "Nüfus yoğunluğu = toplam nüfus / yüz ölçüm. İklim ve yer şekilleri dağılımı etkiler.",
    detail:
      "Türkiye'de kıyı ovaları ve sanayi bölgeleri (Marmara, Ege kıyıları) yoğun nüfusludur. Dağlık, engebeli ve karasal iç bölgeler seyrek nüfusludur. Aritmetik nüfus yoğunluğu ile tarımsal nüfus yoğunluğu farklı kavramlardır.",
    funFact: "Yüksek ve engebeli Doğu Anadolu, olumsuz iklim ve ulaşım koşulları nedeniyle en seyrek nüfuslu bölgedir.",
    tags: ["nüfus", "yerleşme", "yoğunluk"],
    difficulty: "Orta",
  },

  // ---------------- EDEBİYAT ----------------
  {
    id: "ede1",
    category: "edebiyat",
    title: "Söz Sanatları (Edebi Sanatlar)",
    summary: "Teşbih (benzetme), istiare, mecaz-ı mürsel, teşhis, intak, kinaye sık çıkan sanatlardır.",
    detail:
      "Teşbihin dört ögesi: benzeyen, benzetilen, benzetme yönü, benzetme edatı. İstiare, benzetme ögelerinden yalnızca biriyle yapılan benzetmedir. Teşhis (kişileştirme) insan dışı varlığa insan özelliği verir; intak ise onları konuşturur.",
    funFact: "Her intak (konuşturma) aynı zamanda teşhistir; ama her teşhis intak değildir.",
    tags: ["söz sanatları", "teşbih", "istiare"],
    difficulty: "Orta",
  },
  {
    id: "ede2",
    category: "edebiyat",
    title: "Divan Edebiyatı Nazım Biçimleri",
    summary: "Gazel aşkı, kaside övgüyü, mesnevi uzun hikâyeleri, rubai dört dizede felsefeyi işler.",
    detail:
      "Gazel beyitlerle yazılır, ilk beyit 'matla', son beyit 'makta' adını alır; şairin mahlası maktada geçer. Kaside din/devlet büyüklerini övmek için yazılır. Mesnevi her beytin kendi içinde uyaklı olması sayesinde uzun eserlere uygundur.",
    funFact: "Gazelin en güzel beytine 'beytü'l-gazel', kasidenin şaire dönük bölümüne 'fahriye' denir.",
    tags: ["divan edebiyatı", "gazel", "nazım biçimi"],
    difficulty: "İleri",
  },
  {
    id: "ede3",
    category: "edebiyat",
    title: "Edebi Akımlar",
    summary: "Tanzimat, Servet-i Fünun, Milli Edebiyat ve Cumhuriyet dönemi başlıca evrelerdir.",
    detail:
      "Tanzimat'la Batılı türler (roman, tiyatro, makale) edebiyatımıza girdi. Servet-i Fünun'da 'sanat için sanat' anlayışı ve ağır dil öne çıktı. Milli Edebiyat sade dil ve halk kaynaklarına yöneldi (Ömer Seyfettin, Ziya Gökalp).",
    funFact: "İlk yerli roman Şemsettin Sami'nin 'Taaşşuk-ı Talat ve Fitnat', ilk çeviri roman ise 'Telemak'tır.",
    tags: ["edebi akım", "tanzimat", "servet-i fünun"],
    difficulty: "İleri",
  },

  // ---------------- FELSEFE ----------------
  {
    id: "fel1",
    category: "felsefe",
    title: "Bilgi Felsefesi (Epistemoloji)",
    summary: "Rasyonalizm bilginin kaynağını akla, empirizm ise deneyime dayandırır.",
    detail:
      "Descartes (rasyonalizm) 'Düşünüyorum, öyleyse varım' der. Locke ve Hume (empirizm) zihni doğuştan boş kabul eder ('tabula rasa'). Kant ise ikisini birleştirir: bilgi hem deneyle başlar hem de aklın kategorileriyle şekillenir.",
    funFact: "Septisizm (şüphecilik) kesin bilginin mümkün olmadığını savunur; Pyrrhon bu akımın öncüsüdür.",
    tags: ["felsefe", "bilgi", "epistemoloji"],
    difficulty: "Orta",
  },
  {
    id: "fel2",
    category: "felsefe",
    title: "Ahlak Felsefesi (Etik)",
    summary: "Hedonizm hazzı, faydacılık en çok sayıya faydayı, ödev ahlakı görevi temel alır.",
    detail:
      "Kant'ın ödev ahlakında bir eylem sonucundan bağımsız, göreve uygunsa ahlakidir ('kategorik imperatif'). Faydacılık (Bentham, Mill) 'en çok insana en çok mutluluk' ilkesini savunur. Hedonizmde amaç acıdan kaçıp haz elde etmektir.",
    funFact: "Ahlaki eylemin özgür iradeye dayanması gerektiğini savunan görüşe göre, determinizm doğruysa ahlaktan söz edilemez.",
    tags: ["etik", "ahlak", "felsefe"],
    difficulty: "İleri",
  },
];

// Temel kapsüller + genişletilmiş kapsüller (200+ konu)
export const capsules: Capsule[] = [...baseCapsules, ...extraCapsules, ...extraCapsules2, ...extraCapsules3, ...extraCapsules4, ...extraCapsules5];

const rawQuestions: Question[] = [
  // TÜRKÇE
  {
    id: "q_tr1",
    capsuleId: "tr1",
    category: "turkce",
    question: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamda kullanılmıştır?",
    options: [
      "Sıcak çayını yavaşça yudumladı.",
      "Bu haber içimizi ısıttı.",
      "Ateşin yanında ellerini ısıttı.",
      "Güneş toprağı iyice ısıtmıştı.",
    ],
    correctIndex: 1,
    explanation: "'İçini ısıtmak' mutluluk/huzur vermek anlamındadır; sözcük gerçek anlamından uzaklaşmış, mecaz olmuştur.",
  },
  {
    id: "q_tr2",
    capsuleId: "tr2",
    category: "turkce",
    question: "'Öğretmen, sınav kâğıtlarını dün akşam evde okudu.' cümlesinde 'evde' sözcüğü hangi ögedir?",
    options: ["Özne", "Belirtili nesne", "Dolaylı tümleç", "Zarf tümleci"],
    correctIndex: 2,
    explanation: "Yükleme 'nerede' sorusu 'evde' cevabını verir; yer bildiren bu öge dolaylı tümleçtir.",
  },
  {
    id: "q_tr3",
    capsuleId: "tr4",
    category: "turkce",
    question: "Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?",
    options: [
      "Ben de seninle gelmek istiyorum.",
      "Duydum ki yakında taşınıyorsunuz.",
      "Sınav çok zordu ama de olsa bitti.",
      "Akşamki filmi birlikte izleyelim.",
    ],
    correctIndex: 2,
    explanation: "Doğrusu 'ama ne de olsa'dır; buradaki 'de' bağlaç değildir. Diğer cümlelerde 'de/ki' kuralları doğru uygulanmıştır.",
  },
  // MATEMATİK
  {
    id: "q_mat1",
    capsuleId: "mat1",
    category: "matematik",
    question: "x² − 9 ifadesinin çarpanlarına ayrılmış hâli aşağıdakilerden hangisidir?",
    options: ["(x−3)²", "(x−9)(x+1)", "(x−3)(x+3)", "(x−3)(x+9)"],
    correctIndex: 2,
    explanation: "İki kare farkı: a²−b²=(a−b)(a+b). Burada x²−3²=(x−3)(x+3).",
  },
  {
    id: "q_mat2",
    capsuleId: "mat3",
    category: "matematik",
    question: "Bir zar atıldığında üste gelen sayının asal olma olasılığı kaçtır?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctIndex: 2,
    explanation: "1-6 arasındaki asal sayılar: 2, 3, 5 (3 tane). Olasılık 3/6 = 1/2'dir.",
  },
  {
    id: "q_mat3",
    capsuleId: "mat5",
    category: "matematik",
    question: "İki basamaklı bir sayı ile rakamları yer değiştirilmiş hâlinin farkı daima neyin katıdır?",
    options: ["7", "9", "11", "13"],
    correctIndex: 1,
    explanation: "(10a+b) − (10b+a) = 9(a−b) olduğundan fark daima 9'un katıdır.",
  },
  {
    id: "q_mat4",
    capsuleId: "mat4",
    category: "matematik",
    question: "f(x) = x³ fonksiyonunun türevi aşağıdakilerden hangisidir?",
    options: ["3x", "x²", "3x²", "3x³"],
    correctIndex: 2,
    explanation: "(xⁿ)' = n·xⁿ⁻¹ kuralıyla (x³)' = 3x²'dir.",
  },
  // GEOMETRİ
  {
    id: "q_geo1",
    capsuleId: "geo1",
    category: "geometri",
    question: "Dik kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüsü kaç cm'dir?",
    options: ["10", "12", "14", "48"],
    correctIndex: 0,
    explanation: "6-8-10 bir Pisagor üçlüsüdür (3-4-5'in 2 katı): 6²+8²=100, √100=10 cm.",
  },
  {
    id: "q_geo2",
    capsuleId: "geo2",
    category: "geometri",
    question: "Bir çemberde çapı gören çevre açının ölçüsü kaç derecedir?",
    options: ["45°", "60°", "90°", "180°"],
    correctIndex: 2,
    explanation: "Thales teoremine göre çapı gören çevre açı daima 90°'dir.",
  },
  {
    id: "q_geo3",
    capsuleId: "geo3",
    category: "geometri",
    question: "Tabanı 10 cm, yüksekliği 6 cm olan üçgenin alanı kaç cm²'dir?",
    options: ["16", "30", "60", "120"],
    correctIndex: 1,
    explanation: "Üçgen alanı (taban·yükseklik)/2 = (10·6)/2 = 30 cm².",
  },
  // FİZİK
  {
    id: "q_fiz1",
    capsuleId: "fiz1",
    category: "fizik",
    question: "Kütlesi 2 kg olan bir cisme 10 N'luk net kuvvet uygulanırsa ivmesi kaç m/s² olur?",
    options: ["2", "5", "12", "20"],
    correctIndex: 1,
    explanation: "F = m·a → a = F/m = 10/2 = 5 m/s².",
  },
  {
    id: "q_fiz2",
    capsuleId: "fiz2",
    category: "fizik",
    question: "Kütlesi 4 kg, hızı 3 m/s olan cismin kinetik enerjisi kaç joule'dür?",
    options: ["6", "12", "18", "36"],
    correctIndex: 2,
    explanation: "Ek = ½mv² = ½·4·3² = ½·4·9 = 18 J.",
  },
  {
    id: "q_fiz3",
    capsuleId: "fiz3",
    category: "fizik",
    question: "Uçlarına 12 V uygulanan 4 Ω'luk dirençten geçen akım kaç amperdir?",
    options: ["3", "4", "8", "48"],
    correctIndex: 0,
    explanation: "Ohm yasası V=I·R → I = V/R = 12/4 = 3 A.",
  },
  // KİMYA
  {
    id: "q_kim1",
    capsuleId: "kim1",
    category: "kimya",
    question: "Periyodik cetvelde bir periyot boyunca soldan sağa gidildikçe atom yarıçapı nasıl değişir?",
    options: ["Artar", "Azalır", "Değişmez", "Önce artar sonra azalır"],
    correctIndex: 1,
    explanation: "Çekirdek yükü arttıkça elektronlar daha güçlü çekilir; soldan sağa atom yarıçapı azalır.",
  },
  {
    id: "q_kim2",
    capsuleId: "kim2",
    category: "kimya",
    question: "Normal koşullarda (NK) 2 mol gazın hacmi kaç litredir?",
    options: ["11,2 L", "22,4 L", "44,8 L", "67,2 L"],
    correctIndex: 2,
    explanation: "NK'da 1 mol gaz 22,4 L olduğundan 2 mol → 2·22,4 = 44,8 L.",
  },
  {
    id: "q_kim3",
    capsuleId: "kim3",
    category: "kimya",
    question: "pH değeri 7'den küçük olan bir çözelti için aşağıdakilerden hangisi doğrudur?",
    options: ["Baziktir", "Nötrdür", "Asidiktir", "Tuzdur"],
    correctIndex: 2,
    explanation: "pH < 7 olan çözeltiler asidiktir; H⁺ derişimi OH⁻ derişiminden büyüktür.",
  },
  // BİYOLOJİ
  {
    id: "q_biyo1",
    capsuleId: "biyo1",
    category: "biyoloji",
    question: "Hücrede ATP (enerji) üretiminden sorumlu organel hangisidir?",
    options: ["Ribozom", "Mitokondri", "Golgi cisimciği", "Lizozom"],
    correctIndex: 1,
    explanation: "Oksijenli solunumla ATP üreten organel mitokondridir; bu yüzden 'hücrenin enerji santrali' denir.",
  },
  {
    id: "q_biyo2",
    capsuleId: "biyo2",
    category: "biyoloji",
    question: "Aa × Aa çaprazlamasında oluşacak döllerin fenotip oranı nedir? (A baskın)",
    options: ["1:1", "3:1", "9:3:3:1", "1:2:1"],
    correctIndex: 1,
    explanation: "Aa × Aa → 1 AA, 2 Aa, 1 aa. Fenotipte baskın:çekinik = 3:1 olur.",
  },
  {
    id: "q_biyo3",
    capsuleId: "biyo3",
    category: "biyoloji",
    question: "Fotosentezde açığa çıkan oksijen hangi maddeden gelir?",
    options: ["Karbondioksitten", "Glikozdan", "Sudan", "Klorofilden"],
    correctIndex: 2,
    explanation: "İşaretli atom deneyleriyle kanıtlandığı gibi, fotosentezde çıkan O₂ sudan (H₂O) gelir.",
  },
  // TARİH
  {
    id: "q_tar1",
    capsuleId: "tar1",
    category: "tarih",
    question: "Kurtuluş Savaşı'nın ilk siyasi başarısı sayılan ve Doğu Cephesi'nde imzalanan antlaşma hangisidir?",
    options: ["Mudanya Ateşkesi", "Gümrü Antlaşması", "Ankara Antlaşması", "Lozan Antlaşması"],
    correctIndex: 1,
    explanation: "Doğu Cephesi'ndeki başarıların ardından Ermenilerle Gümrü Antlaşması imzalandı; bu ilk siyasi başarıdır.",
  },
  {
    id: "q_tar2",
    capsuleId: "tar2",
    category: "tarih",
    question: "'Türk' adını devlet adı olarak kullanan ilk Türk devleti hangisidir?",
    options: ["Asya Hun Devleti", "Uygurlar", "Göktürkler", "Avarlar"],
    correctIndex: 2,
    explanation: "'Türk' sözcüğünü resmî devlet adı olarak kullanan ilk devlet Göktürklerdir.",
  },
  {
    id: "q_tar3",
    capsuleId: "tar3",
    category: "tarih",
    question: "Ankara Savaşı sonrası Osmanlı'da yaşanan taht kavgası dönemine ne ad verilir?",
    options: ["Lale Devri", "Fetret Devri", "Duraklama Dönemi", "Tanzimat Dönemi"],
    correctIndex: 1,
    explanation: "1402 Ankara Savaşı'ndaki yenilgiden sonra 1413'e kadar süren taht kavgası dönemine Fetret Devri denir.",
  },
  // COĞRAFYA
  {
    id: "q_cog1",
    capsuleId: "cog2",
    category: "cografya",
    question: "Her mevsim yağışlı olan ve gür ormanlarla kaplı iklim tipi hangisidir?",
    options: ["Akdeniz iklimi", "Karasal iklim", "Karadeniz iklimi", "Çöl iklimi"],
    correctIndex: 2,
    explanation: "Karadeniz iklimi her mevsim yağışlıdır ve gür ormanların (nemli ormanlar) görüldüğü iklimdir.",
  },
  {
    id: "q_cog2",
    capsuleId: "cog1",
    category: "cografya",
    question: "Türkiye'de güneş ilk olarak hangi yönden doğar?",
    options: ["Batıdan", "Doğudan", "Kuzeyden", "Güneyden"],
    correctIndex: 1,
    explanation: "Dünya batıdan doğuya döndüğü için güneş en erken en doğudaki noktalardan (Iğdır civarı) doğar.",
  },
  {
    id: "q_cog3",
    capsuleId: "cog2",
    category: "cografya",
    question: "Maki bitki örtüsü hangi iklim tipinin karakteristik özelliğidir?",
    options: ["Karadeniz iklimi", "Karasal iklim", "Akdeniz iklimi", "Tundra iklimi"],
    correctIndex: 2,
    explanation: "Yazın kurak-sıcak geçen Akdeniz ikliminin doğal bitki örtüsü kısa boylu çalılardan oluşan makidir.",
  },
  // EDEBİYAT
  {
    id: "q_ede1",
    capsuleId: "ede1",
    category: "edebiyat",
    question: "'Menekşeler, başlarını öne eğmiş bizi selamlıyordu.' dizesinde hangi söz sanatı vardır?",
    options: ["Teşbih", "Teşhis (kişileştirme)", "Kinaye", "Tezat"],
    correctIndex: 1,
    explanation: "Menekşelere insana özgü 'selamlama' eylemi verildiği için teşhis (kişileştirme) yapılmıştır.",
  },
  {
    id: "q_ede2",
    capsuleId: "ede2",
    category: "edebiyat",
    question: "Divan edebiyatında genellikle aşk ve güzellik temasını işleyen nazım biçimi hangisidir?",
    options: ["Kaside", "Mesnevi", "Gazel", "Rubai"],
    correctIndex: 2,
    explanation: "Gazel, çoğunlukla aşk, güzellik ve şarap gibi lirik temaları işleyen divan şiiri nazım biçimidir.",
  },
  {
    id: "q_ede3",
    capsuleId: "ede3",
    category: "edebiyat",
    question: "Türk edebiyatındaki ilk yerli roman aşağıdakilerden hangisidir?",
    options: ["Telemak", "Taaşşuk-ı Talat ve Fitnat", "İntibah", "Araba Sevdası"],
    correctIndex: 1,
    explanation: "İlk yerli roman Şemsettin Sami'nin 'Taaşşuk-ı Talat ve Fitnat'ıdır; 'Telemak' ise ilk çeviri romandır.",
  },
  // FELSEFE
  {
    id: "q_fel1",
    capsuleId: "fel1",
    category: "felsefe",
    question: "Bilginin kaynağının akıl olduğunu savunan felsefi görüş hangisidir?",
    options: ["Empirizm", "Rasyonalizm", "Septisizm", "Pozitivizm"],
    correctIndex: 1,
    explanation: "Rasyonalizm (akılcılık), doğru bilginin kaynağının akıl olduğunu savunur; Descartes önemli temsilcisidir.",
  },
  {
    id: "q_fel2",
    capsuleId: "fel2",
    category: "felsefe",
    question: "'En çok sayıda insana en çok mutluluk' ilkesini temel alan ahlak görüşü hangisidir?",
    options: ["Hedonizm", "Ödev ahlakı", "Faydacılık (Utilitarizm)", "Nihilizm"],
    correctIndex: 2,
    explanation: "Faydacılık (Bentham, Mill), bir eylemin doğruluğunu sağladığı toplam fayda/mutlulukla ölçer.",
  },
];

// Sorulara özel ipuçları (cevabı açık etmeden yönlendirir)
const questionHints: Record<string, string> = {
  q_tr1: "Sözcüğü zihninde canlandırabiliyor musun? Canlandıramıyorsan mecaz olabilir.",
  q_tr2: "Yükleme 'nerede?' sorusunu sor; yer bildiren öge dolaylı tümleçtir.",
  q_tr3: "Her seçenekte 'de/da' ve 'ki'yi cümleden çıkarmayı dene; anlam bozuluyorsa ek olabilir.",
  q_mat1: "İki terim de tam kare ve aralarında çıkarma var; hangi özdeşlik uyar?",
  q_mat2: "1'den 6'ya kadar olan asal sayıları say, ardından toplam duruma böl.",
  q_mat3: "Sayıyı 10a+b, tersini 10b+a yazıp farkı al.",
  q_mat4: "Kuvvet kuralı: üssü kat sayı yap, üssü bir azalt.",
  q_geo1: "3-4-5 üçgeninin bir katı olabilir mi?",
  q_geo2: "Çapı gören açı için Thales teoremini hatırla.",
  q_geo3: "Alan = (taban × yükseklik) / 2.",
  q_fiz1: "F = m·a formülünü ivme için düzenle.",
  q_fiz2: "Kinetik enerji hızın karesiyle orantılıdır.",
  q_fiz3: "Ohm yasasında akımı yalnız bırak: I = V/R.",
  q_kim1: "Çekirdek yükü arttıkça elektronlar daha güçlü mü çekilir?",
  q_kim2: "NK'da 1 mol = 22,4 L; mol sayısıyla çarp.",
  q_kim3: "pH ölçeğinde 7 nötrdür; altındakiler hangi taraf?",
  q_biyo1: "Hücrenin 'enerji santrali' olarak anılan organeli düşün.",
  q_biyo2: "Aa × Aa çaprazında Punnett karesini kur.",
  q_biyo3: "İşaretli atom deneyi oksijenin kaynağını gösterdi; su mu, CO₂ mü?",
  q_tar1: "Doğu Cephesi ve Ermenilerle imzalanan antlaşmayı hatırla.",
  q_tar2: "'Türk' adını devlet adı olarak ilk kullanan devlet hangisiydi?",
  q_tar3: "1402 Ankara Savaşı'nın ardından yaşanan taht kavgası dönemi.",
  q_cog1: "Her mevsim yağış alan, gür ormanlı iklim hangisi?",
  q_cog2: "Dünya hangi yönde döner? Güneş önce nereden görünür?",
  q_cog3: "Kısa boylu çalılardan oluşan bitki örtüsü hangi iklime özgü?",
  q_ede1: "Menekşelere insana ait bir eylem verilmiş; bu hangi sanattır?",
  q_ede2: "Aşk ve güzelliği işleyen, beyitlerle yazılan lirik nazım biçimi.",
  q_ede3: "'İlk yerli' ile 'ilk çeviri' romanı karıştırma.",
  q_fel1: "Bilginin kaynağı 'akıl' diyen görüşün adını hatırla.",
  q_fel2: "'En çok sayıya en çok mutluluk' hangi görüşün sloganı?",
};

// Tüm ham soruları birleştir (temel + genişletilmiş konuya özel sorular)
const allRawQuestions: Question[] = [
  ...rawQuestions,
  ...questionsExtra,
  ...questionsExtra2,
  ...questionsExtra3,
  ...questionsExtra4,
  ...questionsExtra5,
  ...questionsExtra6,
  ...questionsExtra7,
  ...questionsExtra8,
  ...questionsExtra9,
  ...questionsExtra10,
];

// Ham soruları ipucu ve zorlukla zenginleştirir
export const questions: Question[] = allRawQuestions.map((q) => {
  const cap = capsules.find((c) => c.id === q.capsuleId);
  return {
    ...q,
    hint: q.hint ?? questionHints[q.id] ?? "Bu konuyla ilgili kapsülü tekrar gözden geçir.",
    difficulty: q.difficulty ?? (cap ? mapDifficulty(cap.difficulty) : "Orta"),
  };
});
