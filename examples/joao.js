let seller = new URLSearchParams(window.location.search).get('seller'); // SELLER

// Tratamento das strings (LOWER CASE)
if (seller) { seller = seller.toLowerCase().trim(); }

// Objeto completo da URL de requisição
const hostUrl = new URL(window.location);

// Default QS
const trackingQs = {
  utm_source: 'SPLITZ',
  utm_medium: 'SPLITZ',
  utm_campaign: 'SPLITZ',
  utm_content: 'SPLITZ',
  utm_seller_id: seller || 'SPLITZ',
  utm_target: 'SPLITZ',
  utm_x1: 'SPLITZ',
  utm_x2: 'SPLITZ',
  utm_x3: 'SPLITZ',
};

// QS da URL requisitada
const hostQs = Object.fromEntries(hostUrl.searchParams);

// QS agrupada por prioridade
const finalQs = { ...trackingQs, ...hostQs };

// Construção da QS sck
const sckString = `s-${finalQs.utm_source}|m-${finalQs.utm_medium}|p-${finalQs.utm_campaign}|c-${finalQs.utm_content}|u-${finalQs.utm_seller_id}|t-${finalQs.utm_target}|x1-${finalQs.utm_x1}|x2-${finalQs.utm_x2}|x3-${finalQs.utm_x3}`;
if (!finalQs.sck) { finalQs.sck = sckString; }

const navLinks = document.querySelectorAll('a');
if (navLinks) {
  navLinks.forEach((item) => {
    if (item.href && item.href.match(/#dynamicQs/i)) {
      let itemUrl;
      try {
        itemUrl = new URL(item.href);
      } catch (error) {
        itemUrl = false;
      }

      console.log(itemUrl);

      if (itemUrl) {
        let customCheckoutQs = Object.fromEntries(itemUrl.searchParams);
        customCheckoutQs = { ...customCheckoutQs, ...finalQs };
        itemUrl.search = new URLSearchParams(customCheckoutQs);
        // Insere o customCheckout na URL final
        // eslint-disable-next-line no-param-reassign
        item.href = itemUrl.href;
        console.log(item.href);
        console.log('---');
      }
    }
  });
}
