declare module 'scrollreveal' {
  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    reset?: boolean;
    interval?: number;
  }

  interface ScrollReveal {
    (options?: ScrollRevealOptions): ScrollReveal;
    reveal(selector: string, options?: ScrollRevealOptions): void;
  }

  const scrollReveal: ScrollReveal;
  export = scrollReveal;
}