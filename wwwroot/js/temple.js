window.TempleApp = (function ($) {

    /* ── CONFIG ── */
    const Config = {
        apiBase: '/api/v1',          // ← swap to your real API
        templeId: 'yadagirigutta',
        defaultLang: 'te',
        razorpayKey: 'rzp_test_XXXX', // ← replace with live key
        toastDuration: 3500,
        analyticsId: 'G-XXXX',      // ← replace with GA4 id
    };

    /* ── i18n TRANSLATIONS ── */
    const Translations = {
        te: {
            skip: 'మెయిన్ కంటెంట్‌కు వెళ్ళండి',
            'nav.about': 'గురించి',
            'nav.deities': 'పంచ నరసింహ',
            'nav.darshan': 'దర్శనం',
            'nav.prasad': 'ప్రసాదం',
            'nav.timings': 'సమయాలు',
            'nav.visit': 'సందర్శన',
            'nav.book': 'సేవ బుక్ చేయండి',
            'nav.donate': 'దానం',
            'ticker.label': 'నేరుగా',
            'hero.eyebrow': 'పంచ నరసింహ క్షేత్రం · తెలంగాణ',
            'hero.desc': 'యాదగిరి మహర్షి తపస్సుకు సంతసించి నరసింహ స్వామి ఐదు రూపాలలో ప్రత్యక్షమైన పవిత్ర క్షేత్రం. హైదరాబాద్ నుండి 65 కి.మీ దూరంలో ఉన్న తెలంగాణ యొక్క స్వంత తిరుపతి.',
            'hero.stat1': 'వార్షిక భక్తులు',
            'hero.stat2': 'వార్షిక ఆదాయం',
            'hero.stat3': 'దివ్య రూపాలు',
            'hero.stat4': 'పునర్నిర్మాణం',
            'hero.cta1': 'దర్శనం బుక్ చేయండి',
            'hero.cta2': 'ఆలయం గురించి',
            'about.eyebrow': 'చరిత్ర & మహిమ',
            'about.title': 'తెలంగాణ యొక్క స్వంత తిరుపతి',
            'about.fact1': 'హైదరాబాద్ నుండి',
            'about.fact2': 'ఆలయ సముదాయం',
            'about.fact3': 'ఆలయ నగర ప్రాంతం',
            'deities.eyebrow': 'ఐదు దివ్య అవతారాలు',
            'deities.title': 'పంచ నరసింహ — దివ్య రూపాలు',
            'darshan.eyebrow': 'డిజిటల్ సేవా బుకింగ్',
            'darshan.title': 'దర్శనం & సేవ బుక్ చేయండి',
            'darshan.live': 'నేరుగా వేచి: సర్వ దర్శనం ~2.5 గంటలు · శీఘ్ర దర్శనం ~45 నిమి',
            'darshan.sevas': 'అందుబాటులో ఉన్న సేవలు',
            'seva.free': 'ఉచితం',
            'seva.general': 'సాధారణ',
            'seva.perperson': 'ఒక్కొక్కరు',
            'seva.family': 'కుటుంబానికి',
            'form.title': 'సందర్శన నమోదు చేయండి',
            'tab.darshan': 'దర్శనం',
            'tab.seva': 'సేవ',
            'tab.prasad': 'ప్రసాదం',
            'tab.donate': 'దానం',
            'form.name': 'పూర్తి పేరు',
            'form.phone': 'మొబైల్ నంబర్',
            'form.date': 'సందర్శన తేదీ',
            'form.pilgrims': 'భక్తుల సంఖ్య',
            'form.seva': 'సేవ రకం',
            'form.gotram': 'గోత్రం / నక్షత్రం',
            'form.submit': 'నిర్ధారించి చెల్లించండి',
            'form.note': 'UPI · డెబిట్/క్రెడిట్ · నెట్ బ్యాంకింగ్ · వాలెట్',
            'digital.eyebrow': 'డిజిటల్ ఆలయ నగరం',
            'digital.title': 'సాంకేతిక పరిజ్ఞానం భక్తిని సేవిస్తోంది',
            'prasad.eyebrow': 'పవిత్ర నైవేద్యం',
            'prasad.title': 'మీ ఇంటికి ప్రసాదం డెలివరీ',
            'prasad.btn': 'ప్రసాదం ఆర్డర్ చేయండి',
            'timings.eyebrow': 'రోజువారీ కార్యక్రమం',
            'timings.title': 'ఆలయ సమయాలు & సేవలు',
            'timings.rituals': 'నిత్య కళ్యాణోత్సవం',
            'timings.darshan': 'దర్శన సమయాలు',
            'timings.festivals': 'ప్రధాన ఉత్సవాలు 2025',
            'timings.contact': 'సంప్రదించండి',
            'visit.eyebrow': 'పుణ్యస్థల మార్గదర్శి',
            'visit.title': 'మీ పవిత్ర యాత్ర ప్రణాళిక',
            'donate.eyebrow': 'కోటి భక్తులతో చేరండి',
            'donate.title': 'శ్రీ నరసింహ స్వామికి దానం చేయండి',
            'donate.btn': 'UPI ద్వారా దానం చేయండి',
            'donate.seva': 'సేవ బుక్ చేయండి',
            'footer.quick': 'త్వరిత లింకులు',
            'footer.services': 'సేవలు',
            'footer.digital': 'డిజిటల్',
            'toast.booking': 'బుకింగ్ నిర్ధారించబడింది! SMS ద్వారా డిజిటల్ టోకెన్ వస్తుంది.',
            'toast.booking_te': 'జై శ్రీ లక్ష్మీ నరసింహ స్వామి 🙏',
            'toast.donate': 'దానం అందుకున్నాము. మీకు స్వామి దీవెన.',
        },
        en: {
            skip: 'Skip to main content',
            'nav.about': 'About',
            'nav.deities': 'Pancha Narasimha',
            'nav.darshan': 'Darshan',
            'nav.prasad': 'Prasad',
            'nav.timings': 'Timings',
            'nav.visit': 'Plan Visit',
            'nav.book': 'Book Seva',
            'nav.donate': 'Donate',
            'ticker.label': 'Live',
            'hero.eyebrow': 'Pancha Narasimha Kshetram · Telangana',
            'hero.desc': 'Where sage Yadarishi\'s penance moved Lord Narasimha to manifest in five divine forms. 65 km from Hyderabad — Telangana\'s own Tirupati.',
            'hero.stat1': 'Annual pilgrims',
            'hero.stat2': 'Annual revenue',
            'hero.stat3': 'Divine forms',
            'hero.stat4': 'Reconstruction',
            'hero.cta1': 'Book Darshan Online',
            'hero.cta2': 'About the Temple',
            'about.eyebrow': 'History & Significance',
            'about.title': "Telangana's Own Sacred Tirupati",
            'about.fact1': 'From Hyderabad',
            'about.fact2': 'Temple complex',
            'about.fact3': 'Temple city area',
            'deities.eyebrow': 'The Five Divine Manifestations',
            'deities.title': 'Pancha Narasimha — Five Sacred Forms',
            'darshan.eyebrow': 'Digital Seva Booking',
            'darshan.title': 'Book Your Darshan & Seva',
            'darshan.live': 'Live wait: Sarva Darshan ~2.5 hrs · Sheeghra Darshan ~45 min',
            'darshan.sevas': 'Available Sevas',
            'seva.free': 'Free',
            'seva.general': 'General',
            'seva.perperson': 'per person',
            'seva.family': 'per family',
            'form.title': 'Reserve Your Visit',
            'tab.darshan': 'Darshan',
            'tab.seva': 'Seva',
            'tab.prasad': 'Prasad',
            'tab.donate': 'Donate',
            'form.name': 'Full Name',
            'form.phone': 'Mobile Number',
            'form.date': 'Visit Date',
            'form.pilgrims': 'No. of Pilgrims',
            'form.seva': 'Seva Type',
            'form.gotram': 'Gotram / Nakshatra',
            'form.submit': 'Confirm & Pay Securely',
            'form.note': 'UPI · Debit/Credit · Net Banking · Wallets accepted',
            'digital.eyebrow': 'Digital Temple City',
            'digital.title': 'Technology Serving Ancient Faith',
            'prasad.eyebrow': 'Consecrated Offerings',
            'prasad.title': 'Authentic Prasad Delivered to Your Door',
            'prasad.btn': 'Order Prasad Online',
            'timings.eyebrow': 'Daily Schedule',
            'timings.title': 'Temple Timings & Rituals',
            'timings.rituals': 'Daily Rituals (Nityakalyanotsavam)',
            'timings.darshan': 'Darshan Timings',
            'timings.festivals': 'Major Festivals 2025',
            'timings.contact': 'Contact & Administration',
            'visit.eyebrow': 'Pilgrim Guide',
            'visit.title': 'Plan Your Sacred Journey',
            'donate.eyebrow': 'Join Crore+ Devotees',
            'donate.title': 'Donate to Sri Narasimha Swamy',
            'donate.btn': 'Donate via UPI',
            'donate.seva': 'Book a Seva',
            'footer.quick': 'Quick Links',
            'footer.services': 'Services',
            'footer.digital': 'Digital',
            'toast.booking': 'Booking confirmed! Digital token sent via SMS.',
            'toast.booking_te': 'Jai Sri Lakshmi Narasimha Swamy 🙏',
            'toast.donate': 'Donation received. Swami\'s blessings be with you.',
        }
    };

    /* ── i18n MODULE ── */
    const I18n = {
        current: Config.defaultLang,
        t(key) {
            return Translations[this.current][key] || Translations['en'][key] || key;
        },
        setLang(lang) {
            if (!Translations[lang]) return;
            this.current = lang;
            // Update html lang attribute for SEO
            $('html').attr('lang', lang === 'te' ? 'te' : 'en');
            $('#page-body').removeClass('lang-te lang-en').addClass('lang-' + lang);
            // Render all translated elements
            $('[data-i18n]').each(function () {
                const key = $(this).data('i18n');
                const val = Translations[lang][key];
                if (val) $(this).text(val);
            });
            // Update lang toggle button states
            $('.lang-btn').each(function () {
                const isActive = $(this).data('lang') === lang;
                $(this).toggleClass('active', isActive).attr('aria-pressed', isActive);
            });
            localStorage.setItem('yt-lang', lang);
            $(document).trigger('templeapp:langchange', [lang]);
        }
    };

    /* ── API SERVICE STUB ──
       Replace fetch calls with your real endpoints.
       All methods return Promises — integrate easily
       with React, Vue, or any SPA framework.
    ── */
    const ApiService = {
        baseUrl: Config.apiBase,

        async createBooking(data) {
            // TODO: POST to your booking microservice
            // return fetch(`${this.baseUrl}/booking/create`, {
            //   method: 'POST', headers: {'Content-Type':'application/json'},
            //   body: JSON.stringify(data)
            // }).then(r => r.json());
            console.log('[TempleApp] ApiService.createBooking', data);
            return Promise.resolve({ success: true, tokenId: 'TKN' + Date.now(), qr: '' });
        },

        async createDonation(amount, name) {
            // TODO: integrate Razorpay / PayU
            console.log('[TempleApp] ApiService.createDonation', { amount, name });
            return Promise.resolve({ success: true, receiptId: 'DON' + Date.now() });
        },

        async getLiveWait() {
            // TODO: GET live crowd data from ICCC
            // return fetch(`${this.baseUrl}/crowd/status`).then(r => r.json());
            return Promise.resolve({ sarva: '2.5 hrs', sheeghra: '45 min', count: 48200 });
        },

        async orderPrasad(item, address) {
            console.log('[TempleApp] ApiService.orderPrasad', { item, address });
            return Promise.resolve({ success: true, orderId: 'PRS' + Date.now() });
        }
    };

    /* ── TOAST ── */
    const Toast = {
        show(msg, subMsg = '') {
            $('#toast-msg').text(msg);
            $('#toast-te').text(subMsg);
            $('#toast').addClass('show');
            clearTimeout(this._t);
            this._t = setTimeout(() => $('#toast').removeClass('show'), Config.toastDuration);
        }
    };

    /* ── ANALYTICS STUB ── */
    const Analytics = {
        track(event, data) {
            // TODO: replace with gtag('event', event, data)
            console.log('[TempleApp] Analytics.track', event, data);
        }
    };

    /* ── UI MODULE ── */
    const UI = {
        init() {
            this.initNav();
            this.initLang();
            this.initAOS();
            this.initSevaSelection();
            this.initBookingForm();
            this.initDarshTabs();
            this.initDonation();
            this.initScrollTop();
            this.initSetMinDate();
            this.initPrasadCards();
            this.initKeyboardNav();
        },

        initNav() {
            // Scroll effect
            $(window).on('scroll.nav', function () {
                $('#main-nav').toggleClass('scrolled', $(this).scrollTop() > 60);
                $('#scroll-top').toggleClass('visible', $(this).scrollTop() > 400);
            });
            // Hamburger
            $('#hamburger').on('click', function () {
                const open = $('#nav-drawer').hasClass('open');
                $('#nav-drawer').toggleClass('open');
                $(this).toggleClass('open').attr('aria-expanded', !open);
            });
            // Close drawer on link click
            $('#nav-drawer a').on('click', function () {
                $('#nav-drawer').removeClass('open');
                $('#hamburger').removeClass('open').attr('aria-expanded', false);
            });
            // Smooth scroll for anchor links
            $(document).on('click', 'a[href^="#"]', function (e) {
                const target = $(this.getAttribute('href'));
                if (target.length) {
                    e.preventDefault();
                    $('html,body').animate({ scrollTop: target.offset().top - 70 }, 600, 'swing');
                    Analytics.track('navigation_click', { target: this.getAttribute('href') });
                }
            });
        },

        initLang() {
            // Restore from localStorage
            const saved = localStorage.getItem('yt-lang') || Config.defaultLang;
            I18n.setLang(saved);
            // Click handler for ALL lang-btn elements (nav + drawer)
            $(document).on('click', '.lang-btn', function () {
                const lang = $(this).data('lang');
                I18n.setLang(lang);
                Analytics.track('language_switch', { lang });
            });
        },

        initAOS() {
            if (typeof AOS !== 'undefined') {
                AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic', offset: 60 });
            }
        },

        initSevaSelection() {
            $('#seva-list').on('click keypress', '.seva-row', function (e) {
                if (e.type === 'keypress' && e.which !== 13) return;
                const seva = $(this).data('seva');
                const price = $(this).data('price');
                $('#seva-list .seva-row').removeClass('active');
                $(this).addClass('active');
                $('#f-seva').val(seva);
                Analytics.track('seva_select', { seva, price });
                Toast.show(I18n.t('form.seva') + ': ' + $(this).find('.seva-row-name').text(), I18n.t('seva.family'));
            });
        },

        initBookingForm() {
            $('#book-btn').on('click', async function (e) {
                e.preventDefault();
                const name = $('#f-name').val().trim();
                const phone = $('#f-phone').val().trim();
                const date = $('#f-date').val();
                const seva = $('#f-seva').val();
                if (!name || !phone || !date) {
                    Toast.show(I18n.current === 'te' ? 'దయచేసి అన్ని వివరాలు నమ్మండి' : 'Please fill all required fields.', '');
                    return;
                }
                $(this).text(I18n.current === 'te' ? 'ప్రాసెస్ అవుతోంది...' : 'Processing...').prop('disabled', true);
                try {
                    const res = await ApiService.createBooking({
                        name, phone, date, seva,
                        count: $('#f-count').val(), gotram: $('#f-gotram').val(),
                        lang: I18n.current
                    });
                    if (res.success) {
                        Toast.show(I18n.t('toast.booking'), I18n.t('toast.booking_te'));
                        Analytics.track('booking_success', { seva, tokenId: res.tokenId });
                    }
                } catch (err) {
                    Toast.show('Error. Please try again.', '');
                } finally {
                    $(this).text(I18n.t('form.submit')).prop('disabled', false);
                }
            });
        },

        initDarshTabs() {
            $('.darshan-tabs').on('click', '.dtab', function () {
                $('.dtab').removeClass('active').attr('aria-selected', false);
                $(this).addClass('active').attr('aria-selected', true);
                Analytics.track('tab_click', { tab: $(this).data('tab') });
            });
        },

        initDonation() {
            $('#donate-amounts').on('click', '.donate-amt', function () {
                $('.donate-amt').removeClass('active');
                $(this).addClass('active');
            });
            $('#donate-btn').on('click', async function () {
                const amount = parseInt($('.donate-amt.active').data('amount'), 10) || 501;
                const name = $('#f-name').val().trim() || 'Anonymous';
                $(this).text(I18n.current === 'te' ? 'ప్రాసెస్...' : 'Processing...').prop('disabled', true);
                try {
                    const res = await ApiService.createDonation(amount, name);
                    if (res.success) {
                        Toast.show(I18n.t('toast.donate'), '80G ' + (I18n.current === 'te' ? 'రసీతు పంపబడింది' : 'receipt sent'));
                        Analytics.track('donation_success', { amount, receiptId: res.receiptId });
                    }
                } catch (err) {
                    Toast.show('Payment error. Please retry.', '');
                } finally {
                    $(this).text(I18n.t('donate.btn')).prop('disabled', false);
                }
            });
        },

        initScrollTop() {
            $('#scroll-top').on('click', function () {
                $('html,body').animate({ scrollTop: 0 }, 500);
            });
        },

        initSetMinDate() {
            const today = new Date().toISOString().split('T')[0];
            $('#f-date').attr('min', today).val(today);
        },

        initPrasadCards() {
            $('.prasad-card').on('click keypress', function (e) {
                if (e.type === 'keypress' && e.which !== 13) return;
                const item = $(this).find('.prasad-name-en').text();
                Analytics.track('prasad_click', { item });
                Toast.show(item + (I18n.current === 'te' ? ' కార్ట్‌కు జోడించబడింది' : ' added to cart'), '');
            });
        },

        initKeyboardNav() {
            // Pancha cards keyboard
            $('.pancha-card').on('keypress', function (e) {
                if (e.which === 13) $(this).trigger('click');
            });
        }
    };

    /* ── LIVE DATA POLLING ── */
    function startLivePoll() {
        setInterval(async () => {
            try {
                const data = await ApiService.getLiveWait();
                // Update ticker with fresh data
                // TODO: inject real data into ticker-track spans
            } catch (e) { }
        }, 60000); // poll every 60 seconds
    }
    /* ── PUBLIC API ── */
    return {
        Config,
        I18n,
        ApiService,
        Analytics,
        Toast,
        init() {
            // Modern recommended way (no more .ready warning)
            $(function () {
                UI.init();
                startLivePoll();
                console.log('%c🙏 TempleApp v2.0 | Yadagirigutta Temple', 'color:#C9A84C;font-size:14px;font-weight:bold');
                console.log('%cAPI base:', 'color:#888', Config.apiBase);
                console.log('%cSwitch language:', 'color:#888', 'TempleApp.I18n.setLang("en") / setLang("te")');
                console.log('%cBook darshan:', 'color:#888', 'TempleApp.ApiService.createBooking({...})');
            });
        }
    };

})(jQuery);

