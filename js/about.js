(function(){
  'use strict';

  function getDevInfo(){
    // مستخرج من تذييل الصفحة في index.html
    return {
      developer: 'نجيب المقداد',
      phone: '775396439',
      whatsapp: 'https://wa.me/967775396439',
      facebook: 'https://www.facebook.com/love1991',
      instagram: 'https://www.instagram.com/mr.l0ve/',
      rights: 'جميع الحقوق محفوظة © 2025 نجيب المقداد'
    };
  }

  function render(){
    const section = document.getElementById('about');
    if (!section) return;

    const appName = (typeof window!=='undefined' && window.APP_NAME) ? window.APP_NAME : 'فاست لينك - حسابات';
    const appVersion = (typeof window!=='undefined' && window.APP_VERSION) ? window.APP_VERSION : '';
    const appDesc = (typeof window!=='undefined' && window.APP_DESCRIPTION) ? window.APP_DESCRIPTION : '';
    const dev = getDevInfo();

    const html = `
      <div class="header-bar">
        <h3 class="page-title"><i class="fas fa-info-circle"></i> حول التطبيق</h3>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="about-card p-4 p-md-5 rounded-4 shadow-lg position-relative overflow-hidden">
              <div class="about-glow"></div>
              <div class="text-center mb-4">
                <img src="./icons/icon-128.png" alt="شعار" class="about-logo mb-3">
                <h2 class="fw-bold mb-1">${appName}</h2>
                <div class="text-muted mb-3">الإصدار ${appVersion}</div>
                <p class="lead about-desc">${appDesc}</p>
              </div>
              <div class="row g-3 mt-4">
                <div class="col-12 col-sm-6">
                  <div class="about-tile">
                    <div class="icon-wrap bg-primary-subtle text-primary"><i class="fas fa-user-cog"></i></div>
                    <div>
                      <div class="title">المطور</div>
                      <div class="value">م / ${dev.developer}</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="about-tile">
                    <div class="icon-wrap bg-success-subtle text-success"><i class="fas fa-phone"></i></div>
                    <div>
                      <div class="title">الهاتف</div>
                      <div class="value"><a href="tel:${dev.phone}">${dev.phone}</a></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="about-tile">
                    <div class="icon-wrap bg-success-subtle text-success"><i class="fab fa-whatsapp"></i></div>
                    <div>
                      <div class="title">واتساب</div>
                      <div class="value"><a href="${dev.whatsapp}" target="_blank" rel="noopener">${dev.whatsapp.replace('https://','')}</a></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="about-tile">
                    <div class="icon-wrap bg-primary-subtle text-primary"><i class="fab fa-facebook"></i></div>
                    <div>
                      <div class="title">فيس بوك</div>
                      <div class="value"><a href="${dev.facebook}" target="_blank" rel="noopener">facebook.com/love1991</a></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="about-tile">
                    <div class="icon-wrap bg-danger-subtle text-danger"><i class="fab fa-instagram"></i></div>
                    <div>
                      <div class="title">انستجرام</div>
                      <div class="value"><a href="${dev.instagram}" target="_blank" rel="noopener">instagram.com/mr.l0ve</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-rights text-center mt-4">
                <div class="small opacity-75">${dev.rights}</div>
                <div class="small opacity-75 mt-1">⚖️ يُحظر نسخ أو توزيع هذا النظام بدون إذن مسبق</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        .about-card { background: linear-gradient(180deg,#ffffff, #f8fafc); }
        .about-glow { position:absolute; inset:-40%; background: radial-gradient(600px 300px at 50% -10%, rgba(14,165,233,.18), transparent 60%); animation: floatGlow 6s ease-in-out infinite alternate; pointer-events:none; }
        @keyframes floatGlow { from { transform: translateY(0px); } to { transform: translateY(12px); } }
        .about-logo { width:96px; height:96px; object-fit:contain; border-radius:20px; background:#ffffffcc; padding:8px; box-shadow:0 10px 30px rgba(0,0,0,.08); animation: popIn .5s ease; }
        @keyframes popIn { 0%{ transform: scale(.8); opacity:0 } 100%{ transform: scale(1); opacity:1 } }
        .about-desc { font-size:16px; line-height:1.7; }
        .about-tile { display:flex; align-items:center; gap:12px; background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:14px; box-shadow:0 2px 8px rgba(0,0,0,.04); transition: transform .2s ease, box-shadow .2s ease; }
        .about-tile:hover { transform: translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,.06); }
        .icon-wrap { width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; }
        .title { font-weight:600; font-size:14px; color:#334155; }
        .value a { text-decoration:none; }
        @media (max-width: 768px) { .about-card{ border-radius:16px } .about-desc{ font-size:15px } .icon-wrap{ width:40px; height:40px; font-size:16px } }
      </style>
    `;

    if (typeof FeatureFlags !== 'undefined' && FeatureFlags.isEnabled('safeDomRendering') && typeof setHTML === 'function') { setHTML(section, html); } else { section.innerHTML = html; }
  }

  if (typeof window !== 'undefined') {
    window.About = { render };
  }
})();

