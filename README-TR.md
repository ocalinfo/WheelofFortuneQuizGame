# Çarkıfelek Quiz Oyunu

Çarkıfelek Quiz Oyunu'na hoş geldiniz! Bu interaktif oyun, oyuncuların bir çarkı döndürerek soruları yanıtlamalarını ve puan kazanmalarını sağlar. Oyuncu üç yanlış tahminde bulunduğunda veya 1000 puana ulaştığında oyun sona erer. Aşağıda oyunun kurulumu ve oynanması ile ilgili talimatlar ve proje yapısının kısa bir açıklaması bulunmaktadır.

## İçindekiler

- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Oyun Kuralları](#oyun-kuralları)
- [Proje Yapısı](#proje-yapısı)

## Özellikler

- İnteraktif çark döndürme
- Farklı zorluk seviyelerinde çoktan seçmeli sorular
- Skor takibi ve görüntüleme
- Oyun sonu ve oyun tamamlama için modal pop-up'lar
- Oyun kuralları için modal

## Kurulum

### Gereksinimler

- Web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Metin düzenleyici (VS Code, Sublime Text, Atom)

### Adımlar

1. **Depoyu klonlayın:**
   ```sh
   git clone https://github.com/kullanici-adi/carki-felek-quiz-oyunu.git
   ```
2. **Proje dizinine gidin:**
   ```sh
   cd carki-felek-quiz-oyunu
   ```

## Kullanım

1. **`index.html` dosyasını web tarayıcınızda açın:**
   - `index.html` dosyasına çift tıklayarak veya sağ tıklayıp "Open with" seçeneği ile tercih ettiğiniz web tarayıcısında açabilirsiniz.
2. **Oyuna başlayın:**
   - "Spin the Wheel" düğmesine tıklayarak bir soru alın.
   - Cevabı tahmin etmek için alfabe düğmelerini kullanın.
3. **Kuralları görüntüleyin:**
   - Kurallar düğmesine tıklayarak kuralları modal pop-up içerisinde görüntüleyin.
4. **Oyunu yeniden başlatın:**
   - Oyun sona erdiğinde, modal pop-up içerisindeki "Restart Game" düğmesine tıklayarak oyunu sıfırlayın ve tekrar oynayın.

## Oyun Kuralları

1. Çarkı döndürerek bir soru alın.
2. Cevabı tahmin etmek için harfleri seçin.
3. Yanlış tahmin etmek için üç hakkınız var.
4. Doğru tahminde bulunursanız, çark segmentine göre puan kazanırsınız.
5. 1000 puana ulaşarak oyunu kazanın.
6. Üç yanlış tahminde bulunursanız, oyun sona erer.

## Proje Yapısı

```plaintext
wheel-of-fortune-quiz-game/
├── index.html          # Ana oyun arayüzü
├── styles.css          # Oyunun CSS stilleri
├── scripts.js          # Oyunun JavaScript mantığı
├── intro.html          # Başlangıç sayfası
├── README.md           # Proje dokümantasyonu




index.html

Bu dosya, çark, soru bölümü, alfabe bölümü, skor bölümü ve oyun sonu, oyun tamamlama ve kurallar için modal içeren oyunun ana yapısını içerir.

styles.css

Bu dosya, oyunun CSS stillerini içerir; düzen, renkler, yazı tipleri ve duyarlılık.

scripts.js

Bu dosya, oyunun JavaScript mantığını içerir; çarkı döndürme, soruları gösterme, harfleri seçme, skoru güncelleme, oyun sonu ve oyun tamamlama işlemleri ile modal gösterme/gizleme fonksiyonları.

intro.html

Bu dosya, hoş geldiniz mesajı ve oyuna başlamak için bir düğme içeren başlangıç sayfasını içerir.
```
