export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventParams = {
  category: string;
  label: string;
  value: number;
};

class GTag {
  #id: string;

  constructor(id: string) {
    this.#id = id;
  }

  pageView(url: string) {
    window.gtag('config', this.#id, {
      page_path: url,
    });
  }

  event(action: string, params: EventParams) {
    window.gtag('event', action, params);
  }
}

const gtag = new GTag(GA_TRACKING_ID);

export default gtag;
