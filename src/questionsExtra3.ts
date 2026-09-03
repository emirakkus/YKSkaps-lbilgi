import type { Question } from "./data";

// Temel kapsüllere ek sorular (her konu 4+ soruya çıkar)
export const questionsExtra3: Question[] = [
  // ---- tr1 Mecaz anlam ----
  { id: "q_tr1_a", capsuleId: "tr1", category: "turkce", question: "Aşağıdaki cümlelerin hangisinde mecaz anlamlı bir sözcük vardır?", options: ["Tahtayı çiviyle duvara astı.", "Sınıfın en parlak öğrencisiydi.", "Suyu bardağa doldurdu.", "Kapıyı yavaşça kapattı."], correctIndex: 1, explanation: "'Parlak' burada 'başarılı, zeki' anlamında mecaz olarak kullanılmıştır." },
  { id: "q_tr1_b", capsuleId: "tr1", category: "turkce", question: "'Sözlerin beni derinden yaraladı.' cümlesinde 'yaralamak' sözcüğü hangi anlamdadır?", options: ["Gerçek anlam", "Terim anlam", "Mecaz anlam", "Yan anlam"], correctIndex: 2, explanation: "Burada 'yaralamak' fiziksel değil, 'üzmek/incitmek' anlamında mecazdır." },
  { id: "q_tr1_c", capsuleId: "tr1", category: "turkce", question: "Bir sözcüğün gerçek anlamıyla ilişkili yeni anlam kazanmasına ne denir?", options: ["Mecaz anlam", "Yan anlam", "Terim anlam", "Soyut anlam"], correctIndex: 1, explanation: "Gerçek anlamla bağlantılı yeni anlama yan anlam denir; mecaz ise gerçek anlamdan tümüyle kopar." },

  // ---- tr2 Cümlenin ögeleri ----
  { id: "q_tr2_a", capsuleId: "tr2", category: "turkce", question: "'Annem pazardan taze sebze aldı.' cümlesinde 'taze sebze' hangi ögedir?", options: ["Özne", "Belirtili nesne", "Belirtisiz nesne", "Dolaylı tümleç"], correctIndex: 2, explanation: "Yükleme 'ne aldı?' sorusu 'taze sebze' cevabını verir; belirtisiz nesnedir." },
  { id: "q_tr2_b", capsuleId: "tr2", category: "turkce", question: "Cümlenin ögelerini bulurken ilk olarak ne belirlenir?", options: ["Özne", "Nesne", "Yüklem", "Zarf tümleci"], correctIndex: 2, explanation: "Öge bulmaya her zaman yüklemi belirleyerek başlanır." },
  { id: "q_tr2_c", capsuleId: "tr2", category: "turkce", question: "Nesne, hangi tür fiillerin yükleminde bulunur?", options: ["Geçişsiz fiil", "Geçişli fiil", "Ettirgen fiil", "Dönüşlü fiil"], correctIndex: 1, explanation: "Nesne yalnızca geçişli fiillerin yükleminde bulunur." },

  // ---- tr3 Anlatım bozuklukları ----
  { id: "q_tr3_a", capsuleId: "tr3", category: "turkce", question: "'İçeriye girdi ve çıktı.' cümlesindeki bozukluk türü nedir?", options: ["Gereksiz sözcük", "Mantık hatası", "Özne eksikliği", "Tamlama yanlışı"], correctIndex: 1, explanation: "Bir yere önce girip sonra çıkmak sıralaması mantık hatası içerebilir; olayların mantıksal sırası bozuk verilmiştir." },
  { id: "q_tr3_b", capsuleId: "tr3", category: "turkce", question: "'Ekonomik ve siyasi ilişkiler gelişti.' benzeri ifadelerde en çok hangi hataya dikkat edilir?", options: ["Yüklem eksikliği", "Tamlama yanlışı", "Özne-yüklem uyumu", "Ekfiil eksikliği"], correctIndex: 1, explanation: "Ortak tamlanan gerektiren durumlarda tamlama yanlışı sık görülür." },
  { id: "q_tr3_c", capsuleId: "tr3", category: "turkce", question: "Anlatım bozukluğu sorularında 'sadece, yalnızca' gibi sözcükler neden önemlidir?", options: ["Yeri değişince anlam değişir", "Her zaman gereksizdir", "Yüklemi bozar", "Özneyi belirtir"], correctIndex: 0, explanation: "Bu sözcüklerin cümledeki yeri değiştiğinde anlam da değişir." },

  // ---- tr4 de/ki yazımı ----
  { id: "q_tr4_a", capsuleId: "tr4", category: "turkce", question: "Aşağıdaki cümlelerin hangisinde 'ki' yanlış yazılmıştır?", options: ["Duydum ki gelmişsin.", "Akşamki yağmur şiddetliydi.", "Öyle yorgunum ki uyuyakaldım.", "Sanaki beni tanımıyor."], correctIndex: 3, explanation: "'Sanki' bitişik yazılır; 'sanaki' yanlıştır." },
  { id: "q_tr4_b", capsuleId: "tr4", category: "turkce", question: "'Evde kimse yoktu.' cümlesindeki '-de' için ne söylenir?", options: ["Bağlaç, ayrı yazılır", "Hâl eki, bitişik yazılır", "Yanlış yazılmış", "Ki bağlacıdır"], correctIndex: 1, explanation: "'evde'deki '-de' bulunma hâli ekidir ve bitişik yazılır." },
  { id: "q_tr4_c", capsuleId: "tr4", category: "turkce", question: "Aşağıdakilerden hangisi kalıplaşmış, bitişik yazılan bir sözcüktür?", options: ["ev de", "kalem de", "halbuki", "okul da"], correctIndex: 2, explanation: "'Halbuki, mademki, oysaki, sanki' kalıplaşmış olup bitişik yazılır." },

  // ---- tr5 Paragrafta ana düşünce ----
  { id: "q_tr5_a", capsuleId: "tr5", category: "turkce", question: "Paragraf sorularında zamandan tasarruf için hangi sıra önerilir?", options: ["Önce parçayı sonuna kadar oku", "Önce soruyu, sonra parçayı oku", "Sadece ilk cümleyi oku", "Sadece son cümleyi oku"], correctIndex: 1, explanation: "Önce soruyu okumak, ne aranacağını bilerek okuma sağlar ve zaman kazandırır." },
  { id: "q_tr5_b", capsuleId: "tr5", category: "turkce", question: "'Bu parçadan aşağıdakilerden hangisi çıkarılamaz?' tipi sorularda nasıl çözüm yapılır?", options: ["Rastgele seçilir", "Metne dönerek eleme yapılır", "En uzun seçenek işaretlenir", "İlk seçenek işaretlenir"], correctIndex: 1, explanation: "Dört seçenek metinde vardır; metne dönülerek olmayan seçenek elenerek bulunur." },
  { id: "q_tr5_c", capsuleId: "tr5", category: "turkce", question: "Ana düşünce paragrafın neresinde bulunabilir?", options: ["Yalnızca ilk cümlede", "Yalnızca son cümlede", "Paragrafın geneline yayılabilir", "Yalnızca başlıkta"], correctIndex: 2, explanation: "Ana düşünce çoğu zaman paragrafın tamamına yayılmış olarak verilir." },

  // ---- mat1 Çarpanlara ayırma ----
  { id: "q_mat1_a", capsuleId: "mat1", category: "matematik", question: "x² + 6x + 9 ifadesinin çarpanlara ayrılmış hâli nedir?", options: ["(x+3)²", "(x-3)²", "(x+9)(x+1)", "(x+3)(x-3)"], correctIndex: 0, explanation: "Tam kare: x²+2·3·x+3² = (x+3)²." },
  { id: "q_mat1_b", capsuleId: "mat1", category: "matematik", question: "a³ + b³ ifadesinin çarpanlara ayrılmış hâli hangisidir?", options: ["(a+b)³", "(a+b)(a²-ab+b²)", "(a-b)(a²+ab+b²)", "(a+b)(a²+b²)"], correctIndex: 1, explanation: "Küp toplamı: a³+b³=(a+b)(a²-ab+b²)." },
  { id: "q_mat1_c", capsuleId: "mat1", category: "matematik", question: "(x + 1/x)² açılımı neye eşittir?", options: ["x² + 1/x²", "x² + 2 + 1/x²", "x² - 2 + 1/x²", "x² + 1"], correctIndex: 1, explanation: "(x+1/x)² = x² + 2·x·(1/x) + 1/x² = x² + 2 + 1/x²." },

  // ---- mat2 Bileşke/ters fonksiyon ----
  { id: "q_mat2_a", capsuleId: "mat2", category: "matematik", question: "f(x)=2x, g(x)=x+1 ise (f∘g)(3) kaçtır?", options: ["7", "8", "6", "9"], correctIndex: 1, explanation: "g(3)=4, f(4)=8." },
  { id: "q_mat2_b", capsuleId: "mat2", category: "matematik", question: "(f∘g)⁻¹ ifadesi neye eşittir?", options: ["f⁻¹∘g⁻¹", "g⁻¹∘f⁻¹", "f∘g", "g∘f"], correctIndex: 1, explanation: "Bileşkenin tersi ters sırayla alınır: (f∘g)⁻¹ = g⁻¹∘f⁻¹." },
  { id: "q_mat2_c", capsuleId: "mat2", category: "matematik", question: "f(x)=x+5 fonksiyonunun tersi nedir?", options: ["x-5", "5-x", "x+5", "1/(x+5)"], correctIndex: 0, explanation: "y=x+5 → x=y-5 olduğundan f⁻¹(x)=x-5." },

  // ---- mat3 Olasılık ----
  { id: "q_mat3_a", capsuleId: "mat3", category: "matematik", question: "Bir madeni para atıldığında yazı gelme olasılığı kaçtır?", options: ["1", "1/2", "1/4", "2"], correctIndex: 1, explanation: "İki eşit olasılıktan biri istendiğinden olasılık 1/2'dir." },
  { id: "q_mat3_b", capsuleId: "mat3", category: "matematik", question: "P(A) = 0,3 ise P(A') (tümleyen) kaçtır?", options: ["0,3", "0,7", "1", "0"], correctIndex: 1, explanation: "P(A)+P(A')=1 olduğundan P(A')=1-0,3=0,7." },
  { id: "q_mat3_c", capsuleId: "mat3", category: "matematik", question: "'En az bir' ifadesi içeren olasılık sorularında en pratik yol nedir?", options: ["Tüm durumları tek tek saymak", "1 - (hiç olmama olasılığı)", "Olasılıkları toplamak", "İkiye bölmek"], correctIndex: 1, explanation: "'En az bir' = 1 - (hiçbirinin olmama olasılığı) ile hızlı çözülür." },

  // ---- mat4 Türev ----
  { id: "q_mat4_a", capsuleId: "mat4", category: "matematik", question: "f(x) = 5x² fonksiyonunun türevi nedir?", options: ["5x", "10x", "10x²", "25x"], correctIndex: 1, explanation: "(5x²)' = 5·2x = 10x." },
  { id: "q_mat4_b", capsuleId: "mat4", category: "matematik", question: "Bir fonksiyonun türevi pozitif olduğu aralıkta fonksiyon nasıldır?", options: ["Azalandır", "Artandır", "Sabittir", "Süreksizdir"], correctIndex: 1, explanation: "f'(x)>0 ise fonksiyon o aralıkta artandır." },
  { id: "q_mat4_c", capsuleId: "mat4", category: "matematik", question: "Yerel maksimum/minimum adayı olan noktalarda türev kaçtır?", options: ["1", "Sonsuz", "0", "Negatif"], correctIndex: 2, explanation: "Türevin sıfır olduğu noktalar yerel ekstremum adaylarıdır." },

  // ---- mat5 Sayı basamakları ----
  { id: "q_mat5_a", capsuleId: "mat5", category: "matematik", question: "İki basamaklı bir sayı 10a+b ise, rakamları yer değiştirmiş hâli nasıl yazılır?", options: ["10b+a", "a+b", "10a+b", "ab"], correctIndex: 0, explanation: "Rakamlar yer değiştirince onlar basamağına b, birler basamağına a gelir: 10b+a." },
  { id: "q_mat5_b", capsuleId: "mat5", category: "matematik", question: "Rakamları toplamı 9'un katı olan bir sayı hangi sayıya tam bölünür?", options: ["7", "9", "11", "4"], correctIndex: 1, explanation: "Rakamları toplamı 9'un katı olan sayı 9'a tam bölünür." },
  { id: "q_mat5_c", capsuleId: "mat5", category: "matematik", question: "Üç basamaklı bir sayı hangi biçimde çözümlenir?", options: ["a+b+c", "100a+10b+c", "abc", "10a+b+c"], correctIndex: 1, explanation: "Üç basamaklı sayı 100a+10b+c biçiminde yazılır." },

  // ---- geo1 Pisagor/özel üçgen ----
  { id: "q_geo1_a", capsuleId: "geo1", category: "geometri", question: "30-60-90 üçgeninde kenar oranları nasıldır?", options: ["1 : 1 : √2", "1 : √3 : 2", "3 : 4 : 5", "1 : 2 : 3"], correctIndex: 1, explanation: "30-60-90 üçgeninde kenarlar 1 : √3 : 2 oranındadır." },
  { id: "q_geo1_b", capsuleId: "geo1", category: "geometri", question: "45-45-90 üçgeninde kenar oranları nasıldır?", options: ["1 : 1 : √2", "1 : √3 : 2", "1 : 2 : √5", "2 : 3 : 4"], correctIndex: 0, explanation: "İkizkenar dik üçgende oranlar 1 : 1 : √2'dir." },
  { id: "q_geo1_c", capsuleId: "geo1", category: "geometri", question: "Dik kenarları 5 ve 12 olan dik üçgenin hipotenüsü kaçtır?", options: ["13", "17", "15", "60"], correctIndex: 0, explanation: "5-12-13 bir Pisagor üçlüsüdür; hipotenüs 13'tür." },

  // ---- geo2 Çemberde açılar ----
  { id: "q_geo2_a", capsuleId: "geo2", category: "geometri", question: "Bir yayı gören merkez açı 80° ise aynı yayı gören çevre açı kaç derecedir?", options: ["40°", "80°", "160°", "20°"], correctIndex: 0, explanation: "Çevre açı, gördüğü yayın yarısı kadardır: 80/2=40°." },
  { id: "q_geo2_b", capsuleId: "geo2", category: "geometri", question: "Kirişler dörtgeninde karşılıklı iki açının toplamı kaç derecedir?", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "Kirişler (çembersel) dörtgende karşılıklı açılar toplamı 180°'dir." },
  { id: "q_geo2_c", capsuleId: "geo2", category: "geometri", question: "Aynı yayı gören çevre açılar için ne söylenir?", options: ["Birbirine eşittir", "Toplamları 90°", "Biri diğerinin iki katı", "Toplamları 180°"], correctIndex: 0, explanation: "Aynı yayı gören çevre açılar birbirine eşittir." },

  // ---- geo3 Alan formülleri ----
  { id: "q_geo3_a", capsuleId: "geo3", category: "geometri", question: "Paralel kenarlarının uzunlukları 6 ve 10, yüksekliği 4 olan yamuğun alanı kaçtır?", options: ["32", "40", "24", "16"], correctIndex: 0, explanation: "Yamuk alanı [(a+c)/2]·h = [(6+10)/2]·4 = 8·4 = 32." },
  { id: "q_geo3_b", capsuleId: "geo3", category: "geometri", question: "Paralelkenarın alanı nasıl hesaplanır?", options: ["taban × yükseklik", "(taban × yükseklik)/2", "taban²", "2 × taban"], correctIndex: 0, explanation: "Paralelkenar alanı taban × yüksekliktir." },
  { id: "q_geo3_c", capsuleId: "geo3", category: "geometri", question: "Tabanları eşit iki üçgenin alan oranı neye eşittir?", options: ["Kenar oranına", "Yükseklik oranına", "Açı oranına", "Çevre oranına"], correctIndex: 1, explanation: "Tabanları eşitse alan oranı yükseklik oranına eşittir." },

  // ---- fiz1 Newton yasaları ----
  { id: "q_fiz1_a", capsuleId: "fiz1", category: "fizik", question: "Bir cisme etkiyen net kuvvet sıfır ise cisim nasıl hareket eder?", options: ["Hızlanır", "Durur ya da sabit hızla gider", "Yavaşlar", "Geri döner"], correctIndex: 1, explanation: "Net kuvvet sıfırsa cisim dengededir; durur veya sabit hızla hareket eder (eylemsizlik)." },
  { id: "q_fiz1_b", capsuleId: "fiz1", category: "fizik", question: "Etki-tepki kuvvetleri için aşağıdakilerden hangisi doğrudur?", options: ["Aynı cisme etkir", "Eşit büyüklükte, zıt yöndedir", "Birbirini götürür", "Aynı yöndedir"], correctIndex: 1, explanation: "Etki-tepki kuvvetleri eşit büyüklükte, zıt yönlü ve farklı cisimlere etkir." },
  { id: "q_fiz1_c", capsuleId: "fiz1", category: "fizik", question: "Yukarı ivmelenen bir asansördeki cisme etkiyen tepki kuvveti (N) nasıl ifade edilir?", options: ["N = m·g", "N = m(g+a)", "N = m(g-a)", "N = m·a"], correctIndex: 1, explanation: "Yukarı ivmede N = m(g+a) olur." },

  // ---- fiz2 Enerji korunumu ----
  { id: "q_fiz2_a", capsuleId: "fiz2", category: "fizik", question: "Serbest düşen bir cismin en üst noktada hangi enerjisi en büyüktür?", options: ["Kinetik enerji", "Potansiyel enerji", "Isı enerjisi", "Kimyasal enerji"], correctIndex: 1, explanation: "En üstte hız sıfır olduğundan potansiyel enerji en büyüktür." },
  { id: "q_fiz2_b", capsuleId: "fiz2", category: "fizik", question: "Potansiyel enerji hangi formülle hesaplanır?", options: ["½mv²", "m·g·h", "F·x", "V·I"], correctIndex: 1, explanation: "Yer çekimi potansiyel enerjisi Ep = m·g·h'dir." },
  { id: "q_fiz2_c", capsuleId: "fiz2", category: "fizik", question: "Sürtünmesiz eğik düzlemde bir cismin en alttaki hızı neye bağlıdır?", options: ["Sadece kütleye", "Sadece yüksekliğe", "Eğim açısına", "Renge"], correctIndex: 1, explanation: "v=√(2gh) olduğundan hız yalnızca yüksekliğe bağlıdır, kütleye değil." },

  // ---- fiz3 Ohm yasası ----
  { id: "q_fiz3_a", capsuleId: "fiz3", category: "fizik", question: "Seri bağlı 3 Ω ve 5 Ω dirençlerin eşdeğer direnci kaçtır?", options: ["2 Ω", "8 Ω", "15 Ω", "1,875 Ω"], correctIndex: 1, explanation: "Seri bağlamada dirençler toplanır: 3+5=8 Ω." },
  { id: "q_fiz3_b", capsuleId: "fiz3", category: "fizik", question: "Seri bir devrede aşağıdakilerden hangisi her yerde aynıdır?", options: ["Gerilim", "Akım", "Direnç", "Güç"], correctIndex: 1, explanation: "Seri devrede akım her noktada aynıdır; gerilim paylaşılır." },
  { id: "q_fiz3_c", capsuleId: "fiz3", category: "fizik", question: "Paralel bağlı iki eşit 6 Ω direncin eşdeğeri kaçtır?", options: ["12 Ω", "6 Ω", "3 Ω", "2 Ω"], correctIndex: 2, explanation: "İki eşit direnç paralelde birinin yarısına eşittir: 6/2=3 Ω." },

  // ---- kim1 Periyodik eğilimler ----
  { id: "q_kim1_a", capsuleId: "kim1", category: "kimya", question: "Periyodik cetvelde yukarıdan aşağıya inildikçe atom yarıçapı nasıl değişir?", options: ["Azalır", "Artar", "Değişmez", "Sıfırlanır"], correctIndex: 1, explanation: "Aşağı inildikçe yeni katman eklendiği için atom yarıçapı artar." },
  { id: "q_kim1_b", capsuleId: "kim1", category: "kimya", question: "En yüksek elektronegatifliğe sahip element hangisidir?", options: ["Flor (F)", "Sodyum (Na)", "Demir (Fe)", "Helyum (He)"], correctIndex: 0, explanation: "Elektronegatiflik sağ üste doğru artar; en yüksek değer flordadır." },
  { id: "q_kim1_c", capsuleId: "kim1", category: "kimya", question: "Metaller periyodik cetvelde genellikle nerede bulunur?", options: ["Sağ üstte", "Sol ve alt tarafta", "Sadece son grupta", "Ortada tek sırada"], correctIndex: 1, explanation: "Metaller sol ve alt tarafta, ametaller sağ üstte yoğunlaşır." },

  // ---- kim2 Mol ----
  { id: "q_kim2_a", capsuleId: "kim2", category: "kimya", question: "1 mol maddede kaç tane tanecik bulunur?", options: ["6,022×10²³", "3,14×10¹⁰", "1000", "22,4"], correctIndex: 0, explanation: "Avogadro sayısı 6,022×10²³'tür; 1 molde bu kadar tanecik vardır." },
  { id: "q_kim2_b", capsuleId: "kim2", category: "kimya", question: "Kimyasal denklemlerdeki katsayılar neyi gösterir?", options: ["Kütleyi", "Mol oranını", "Hacmi", "Sıcaklığı"], correctIndex: 1, explanation: "Denklem katsayıları tepkimeye giren/çıkan maddelerin mol oranını verir." },
  { id: "q_kim2_c", capsuleId: "kim2", category: "kimya", question: "Avogadro sayısı taneciğin türüne göre değişir mi?", options: ["Evet, atomda farklıdır", "Hayır, her tür için aynıdır", "Sadece gazlarda geçerli", "Sadece katılarda geçerli"], correctIndex: 1, explanation: "Avogadro sayısı taneciğin türünden bağımsızdır; her zaman aynıdır." },

  // ---- kim3 Asit-baz ----
  { id: "q_kim3_a", capsuleId: "kim3", category: "kimya", question: "pH + pOH toplamı (25°C'de) kaçtır?", options: ["7", "10", "14", "1"], correctIndex: 2, explanation: "25°C'de pH + pOH = 14'tür." },
  { id: "q_kim3_b", capsuleId: "kim3", category: "kimya", question: "[H⁺] derişimi 10 kat artarsa pH nasıl değişir?", options: ["1 birim artar", "1 birim azalır", "Değişmez", "10 kat artar"], correctIndex: 1, explanation: "Logaritmik ölçek nedeniyle [H⁺] 10 kat artınca pH 1 birim azalır." },
  { id: "q_kim3_c", capsuleId: "kim3", category: "kimya", question: "Kuvvetli asit ile kuvvetli bazın tuzu nasıl bir çözelti verir?", options: ["Asidik", "Bazik", "Nötr", "Tampon"], correctIndex: 2, explanation: "Kuvvetli asit-kuvvetli baz tuzu nötr çözelti oluşturur." },

  // ---- biyo1 Organeller ----
  { id: "q_biyo1_a", capsuleId: "biyo1", category: "biyoloji", question: "Protein sentezinden sorumlu organel hangisidir?", options: ["Ribozom", "Mitokondri", "Koful", "Lizozom"], correctIndex: 0, explanation: "Ribozomlar protein sentezini gerçekleştirir." },
  { id: "q_biyo1_b", capsuleId: "biyo1", category: "biyoloji", question: "Aşağıdakilerden hangisi yalnızca bitki hücresinde bulunur?", options: ["Mitokondri", "Ribozom", "Kloroplast", "Çekirdek"], correctIndex: 2, explanation: "Kloroplast (ve hücre çeperi) bitki hücresine özgüdür." },
  { id: "q_biyo1_c", capsuleId: "biyo1", category: "biyoloji", question: "Mitokondri ve kloroplastın kendi DNA'sına sahip olması hangi teoriyi destekler?", options: ["Doğal seçilim", "Endosimbiyoz", "Mutasyon", "Homeostazi"], correctIndex: 1, explanation: "Kendi DNA'larının olması endosimbiyoz teorisinin kanıtı olarak sunulur." },

  // ---- biyo2 Mendel ----
  { id: "q_biyo2_a", capsuleId: "biyo2", category: "biyoloji", question: "AaBb × AaBb dihibrit çaprazlamasında fenotip oranı nedir?", options: ["3:1", "1:1", "9:3:3:1", "1:2:1"], correctIndex: 2, explanation: "İki karakterli (dihibrit) çaprazlamada 9:3:3:1 oranı görülür." },
  { id: "q_biyo2_b", capsuleId: "biyo2", category: "biyoloji", question: "İki alelin de fenotipte birlikte görünmesine ne denir?", options: ["Tam baskınlık", "Eş baskınlık", "Çekiniklik", "Melezlik"], correctIndex: 1, explanation: "Eş baskınlıkta iki alel de fenotipte görünür (AB kan grubu gibi)." },
  { id: "q_biyo2_c", capsuleId: "biyo2", category: "biyoloji", question: "X'e bağlı çekinik hastalıklar neden erkeklerde daha sık görülür?", options: ["Erkeklerde iki X vardır", "Erkeklerde tek X olduğu için", "Y kromozomu baskındır", "Erkekler daha güçlüdür"], correctIndex: 1, explanation: "Erkeklerde tek X olduğundan çekinik alel doğrudan fenotipe yansır." },

  // ---- biyo3 Fotosentez/solunum ----
  { id: "q_biyo3_a", capsuleId: "biyo3", category: "biyoloji", question: "Fotosentez hangi organelde gerçekleşir?", options: ["Mitokondri", "Kloroplast", "Ribozom", "Golgi"], correctIndex: 1, explanation: "Fotosentez, klorofil içeren kloroplastta gerçekleşir." },
  { id: "q_biyo3_b", capsuleId: "biyo3", category: "biyoloji", question: "Oksijenli solunum hangi organelde ATP üretir?", options: ["Kloroplast", "Mitokondri", "Çekirdek", "Koful"], correctIndex: 1, explanation: "Oksijenli solunumla glikoz mitokondride parçalanıp ATP üretilir." },
  { id: "q_biyo3_c", capsuleId: "biyo3", category: "biyoloji", question: "Fotosentez hızını artıran etkenlerden biri değildir?", options: ["Işık şiddeti", "CO₂ miktarı", "Uygun sıcaklık", "Karanlık ortam"], correctIndex: 3, explanation: "Karanlık ortam fotosentezi azaltır; ışık, CO₂ ve uygun sıcaklık artırır." },

  // ---- tar1 Kurtuluş Savaşı cepheleri ----
  { id: "q_tar1_a", capsuleId: "tar1", category: "tarih", question: "Doğu Cephesi'nde başarı kazanan komutan kimdir?", options: ["İsmet İnönü", "Kâzım Karabekir", "Fevzi Çakmak", "Refet Bele"], correctIndex: 1, explanation: "Doğu Cephesi'nde Kâzım Karabekir Ermenilere karşı başarı sağlamıştır." },
  { id: "q_tar1_b", capsuleId: "tar1", category: "tarih", question: "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi unvan verilmiştir?", options: ["Paşa", "Gazi ve mareşallik", "Halife", "Başkomutan"], correctIndex: 1, explanation: "Sakarya Zaferi sonrası Mustafa Kemal'e 'Gazi' unvanı ve mareşallik rütbesi verildi." },
  { id: "q_tar1_c", capsuleId: "tar1", category: "tarih", question: "Güney Cephesi'ndeki mücadele hangi güçle yürütülmüştür?", options: ["Düzenli ordu", "Kuvâ-yi Milliye (halk direnişi)", "Yabancı ordular", "Deniz kuvvetleri"], correctIndex: 1, explanation: "Güney Cephesi'nde mücadele Kuvâ-yi Milliye (halk direnişi) ile yürütülmüştür." },

  // ---- tar2 İlk Türk devletleri ----
  { id: "q_tar2_a", capsuleId: "tar2", category: "tarih", question: "Yerleşik hayata geçen ilk Türk topluluğu hangisidir?", options: ["Asya Hunları", "Göktürkler", "Uygurlar", "Avarlar"], correctIndex: 2, explanation: "Uygurlar yerleşik hayata geçen ilk Türk topluluğudur." },
  { id: "q_tar2_b", capsuleId: "tar2", category: "tarih", question: "Türk tarihinin ilk yazılı belgeleri hangileridir?", options: ["Orhun Yazıtları", "Divanü Lugati't-Türk", "Kutadgu Bilig", "Şecere-i Türk"], correctIndex: 0, explanation: "Göktürklere ait Orhun Yazıtları, Türk tarihinin ilk yazılı belgeleridir." },
  { id: "q_tar2_c", capsuleId: "tar2", category: "tarih", question: "Matbaayı kullanan ilk Türk topluluğu hangisidir?", options: ["Göktürkler", "Uygurlar", "Hunlar", "Karahanlılar"], correctIndex: 1, explanation: "Uygurlar matbaayı kullanan ilk Türk topluluğudur." },

  // ---- tar3 Osmanlı kuruluş ----
  { id: "q_tar3_a", capsuleId: "tar3", category: "tarih", question: "Osmanlı Devleti hangi yıl kurulmuştur?", options: ["1299", "1453", "1071", "1326"], correctIndex: 0, explanation: "Osmanlı Devleti 1299'da kurulmuştur." },
  { id: "q_tar3_b", capsuleId: "tar3", category: "tarih", question: "İlk düzenli ordu ve ilk medrese hangi padişah döneminde kuruldu?", options: ["Osman Bey", "Orhan Bey", "I. Murat", "Yıldırım Bayezid"], correctIndex: 1, explanation: "Orhan Bey döneminde ilk medrese (İznik) ve ilk düzenli ordu kuruldu." },
  { id: "q_tar3_c", capsuleId: "tar3", category: "tarih", question: "Kosova Savaşı hangi padişah döneminde kazanılmıştır?", options: ["Osman Bey", "Orhan Bey", "I. Murat", "II. Mehmet"], correctIndex: 2, explanation: "I. Murat döneminde Rumeli'deki fetihler hızlandı ve Kosova Savaşı kazanıldı." },

  // ---- cog1 Türkiye konumu ----
  { id: "q_cog1_a", capsuleId: "cog1", category: "cografya", question: "Türkiye yaklaşık hangi paraleller arasında yer alır?", options: ["26°-45° kuzey", "36°-42° kuzey", "0°-23° kuzey", "42°-66° kuzey"], correctIndex: 1, explanation: "Türkiye 36°-42° kuzey paralelleri arasında yer alır." },
  { id: "q_cog1_b", capsuleId: "cog1", category: "cografya", question: "Türkiye'nin doğusu ile batısı arasındaki yerel saat farkı yaklaşık kaç dakikadır?", options: ["19 dakika", "45 dakika", "76 dakika", "120 dakika"], correctIndex: 2, explanation: "19° boylam farkı × 4 dk = 76 dakikalık yerel saat farkı vardır." },
  { id: "q_cog1_c", capsuleId: "cog1", category: "cografya", question: "Aşağıdakilerden hangisi Türkiye'nin özel konum özelliğidir?", options: ["Denize kıyısı olmaması", "Boğazlara sahip olması", "Ekvatorda bulunması", "Kutba yakın olması"], correctIndex: 1, explanation: "Boğazlara sahip olmak ve Asya-Avrupa köprüsü olmak özel konum özelliğidir." },

  // ---- cog2 İklim tipleri ----
  { id: "q_cog2_a", capsuleId: "cog2", category: "cografya", question: "Yazları sıcak-kurak, kışları ılık-yağışlı geçen iklim hangisidir?", options: ["Karadeniz iklimi", "Akdeniz iklimi", "Karasal iklim", "Tundra iklimi"], correctIndex: 1, explanation: "Akdeniz iklimi yazları sıcak-kurak, kışları ılık-yağışlıdır." },
  { id: "q_cog2_b", capsuleId: "cog2", category: "cografya", question: "Karasal iklimin belirgin özelliği nedir?", options: ["Her mevsim yağışlı", "Gece-gündüz ve yaz-kış sıcaklık farkının fazla olması", "Kışların ılık geçmesi", "Nemin yüksek olması"], correctIndex: 1, explanation: "Karasal iklimde sıcaklık farkları fazladır, kışlar soğuktur." },
  { id: "q_cog2_c", capsuleId: "cog2", category: "cografya", question: "Bir bölgenin bitki örtüsünü en çok ne belirler?", options: ["Yağış rejimi ve iklim", "Nüfus", "Toprak rengi", "Yol ağı"], correctIndex: 0, explanation: "Yağış rejimi ve iklim, doğal bitki örtüsünü belirleyen temel etkendir." },

  // ---- cog3 Nüfus/yerleşme ----
  { id: "q_cog3_a", capsuleId: "cog3", category: "cografya", question: "Türkiye'de nüfusun yoğun olduğu yerlere örnek hangisidir?", options: ["Yüksek dağlık alanlar", "Kıyı ovaları ve sanayi bölgeleri", "Çöller", "Bataklıklar"], correctIndex: 1, explanation: "Marmara ve Ege kıyıları gibi ova ve sanayi bölgeleri yoğun nüfusludur." },
  { id: "q_cog3_b", capsuleId: "cog3", category: "cografya", question: "Aritmetik nüfus yoğunluğu ile tarımsal nüfus yoğunluğu için ne söylenir?", options: ["Aynı kavramdır", "Farklı kavramlardır", "İkisi de yükseltiyi gösterir", "İlgisizdir"], correctIndex: 1, explanation: "Bu ikisi farklı kavramlardır; hesaplama biçimleri ve anlamları farklıdır." },
  { id: "q_cog3_c", capsuleId: "cog3", category: "cografya", question: "Nüfus dağılışını etkileyen doğal faktör hangisidir?", options: ["Sanayi", "İklim ve yer şekilleri", "Ulaşım", "Eğitim"], correctIndex: 1, explanation: "İklim ve yer şekilleri nüfus dağılışını etkileyen doğal faktörlerdir." },

  // ---- ede1 Söz sanatları ----
  { id: "q_ede1_a", capsuleId: "ede1", category: "edebiyat", question: "Benzetmenin (teşbih) kaç temel ögesi vardır?", options: ["2", "3", "4", "5"], correctIndex: 2, explanation: "Teşbihin dört ögesi vardır: benzeyen, benzetilen, benzetme yönü, benzetme edatı." },
  { id: "q_ede1_b", capsuleId: "ede1", category: "edebiyat", question: "İnsan dışı bir varlığı konuşturma sanatına ne denir?", options: ["Teşhis", "İntak (konuşturma)", "Teşbih", "Mecaz-ı mürsel"], correctIndex: 1, explanation: "İnsan dışı varlığı konuşturmaya intak denir; her intak aynı zamanda teşhistir." },
  { id: "q_ede1_c", capsuleId: "ede1", category: "edebiyat", question: "Benzetme ögelerinden yalnızca biriyle yapılan söz sanatı hangisidir?", options: ["Teşbih", "İstiare", "Tezat", "Kinaye"], correctIndex: 1, explanation: "İstiare, benzetme ögelerinden yalnızca biri (benzeyen veya benzetilen) ile yapılır." },

  // ---- ede2 Divan nazım biçimleri ----
  { id: "q_ede2_a", capsuleId: "ede2", category: "edebiyat", question: "Din ve devlet büyüklerini övmek için yazılan nazım biçimi hangisidir?", options: ["Gazel", "Kaside", "Mesnevi", "Rubai"], correctIndex: 1, explanation: "Kaside, din ve devlet büyüklerini övmek amacıyla yazılır." },
  { id: "q_ede2_b", capsuleId: "ede2", category: "edebiyat", question: "Gazelin ilk beytine ne ad verilir?", options: ["Makta", "Matla", "Beytü'l-gazel", "Mahlas"], correctIndex: 1, explanation: "Gazelin ilk beytine 'matla', son beytine 'makta' denir." },
  { id: "q_ede2_c", capsuleId: "ede2", category: "edebiyat", question: "Uzun aşk hikâyeleri ve destansı konular için en uygun nazım biçimi hangisidir?", options: ["Gazel", "Rubai", "Mesnevi", "Şarkı"], correctIndex: 2, explanation: "Her beyti kendi içinde uyaklı olan mesnevi, uzun eserlere uygundur." },

  // ---- ede3 Edebi akımlar ----
  { id: "q_ede3_a", capsuleId: "ede3", category: "edebiyat", question: "Batılı türler (roman, tiyatro, makale) edebiyatımıza hangi dönemde girmiştir?", options: ["Divan edebiyatı", "Tanzimat", "Halk edebiyatı", "İslamiyet öncesi"], correctIndex: 1, explanation: "Batılı türler Tanzimat döneminde edebiyatımıza girmiştir." },
  { id: "q_ede3_b", capsuleId: "ede3", category: "edebiyat", question: "Türk edebiyatındaki ilk çeviri roman hangisidir?", options: ["Telemak", "İntibah", "Araba Sevdası", "Mai ve Siyah"], correctIndex: 0, explanation: "İlk çeviri roman 'Telemak'tır (Yusuf Kâmil Paşa)." },
  { id: "q_ede3_c", capsuleId: "ede3", category: "edebiyat", question: "Sade dil ve halk kaynaklarına yönelen dönem hangisidir?", options: ["Servet-i Fünun", "Milli Edebiyat", "Fecr-i Âti", "Tanzimat"], correctIndex: 1, explanation: "Milli Edebiyat sade dil ve halk kaynaklarına yönelmiştir." },

  // ---- fel1 Bilgi felsefesi ----
  { id: "q_fel1_a", capsuleId: "fel1", category: "felsefe", question: "'Düşünüyorum, öyleyse varım' sözü hangi düşünüre aittir?", options: ["Locke", "Descartes", "Hume", "Kant"], correctIndex: 1, explanation: "Bu söz rasyonalizmin öncüsü Descartes'a aittir." },
  { id: "q_fel1_b", capsuleId: "fel1", category: "felsefe", question: "Zihni doğuştan boş kabul eden ('tabula rasa') görüş hangisidir?", options: ["Rasyonalizm", "Empirizm", "İdealizm", "Sezgicilik"], correctIndex: 1, explanation: "Empirizm (Locke, Hume) zihni doğuştan boş bir levha (tabula rasa) kabul eder." },
  { id: "q_fel1_c", capsuleId: "fel1", category: "felsefe", question: "Akıl ile deneyi birleştiren filozof kimdir?", options: ["Descartes", "Kant", "Hume", "Platon"], correctIndex: 1, explanation: "Kant, bilginin deneyle başladığını ama aklın kategorileriyle şekillendiğini savunur." },

  // ---- fel2 Ahlak felsefesi ----
  { id: "q_fel2_a", capsuleId: "fel2", category: "felsefe", question: "Bir eylemi sonucundan bağımsız, göreve uygunluğuna göre değerlendiren anlayış hangisidir?", options: ["Hedonizm", "Faydacılık", "Kant'ın ödev ahlakı", "Egoizm"], correctIndex: 2, explanation: "Kant'ın ödev ahlakında eylem, sonucundan bağımsız olarak göreve uygunsa ahlakidir." },
  { id: "q_fel2_b", capsuleId: "fel2", category: "felsefe", question: "Amacı acıdan kaçıp haz elde etmek olan ahlak görüşü hangisidir?", options: ["Hedonizm", "Ödev ahlakı", "Faydacılık", "Nihilizm"], correctIndex: 0, explanation: "Hedonizmde temel amaç acıdan kaçınıp haz (mutluluk) elde etmektir." },
  { id: "q_fel2_c", capsuleId: "fel2", category: "felsefe", question: "Kant'ın koşulsuz ahlak yasasına ne ad verilir?", options: ["Kategorik imperatif", "Toplum sözleşmesi", "Altın oran", "Erdem"], correctIndex: 0, explanation: "Kant'ın koşulsuz, evrensel ahlak yasasına 'kategorik imperatif' denir." },
];
