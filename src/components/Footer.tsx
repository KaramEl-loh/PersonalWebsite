export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background flex flex-col gap-2 items-center p-4 mt-16 ">
      <p className="text-sm">Karam El-loh © {new Date().getFullYear()}</p>
      <ul className="flex flex-row gap-4 items-center">
        <li>
          <a href="https://github.com/kjoudah" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z"
                fill="#F4F2F3"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/karam-el-loh-0706b7164/"
            target="_blank">
            <svg
              className="fill-current text-background hover:text-red-500"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8.4199 8.23467C8.08657 7.384 8.0999 6.412 8.2479 5.52267C9.26682 5.82796 10.2238 6.31095 11.0746 6.94933C11.4479 7.23466 11.9372 7.32667 12.3932 7.18933C13.5633 6.83925 14.7786 6.66314 15.9999 6.66667C17.2812 6.66667 18.4986 6.85333 19.6039 7.188C20.0599 7.32666 20.5492 7.23333 20.9212 6.948C21.7716 6.30975 22.7281 5.82677 23.7466 5.52133C23.8946 6.41066 23.9066 7.38267 23.5759 8.232C23.3759 8.744 23.4759 9.33333 23.8532 9.752C24.8186 10.8227 25.3332 12.0533 25.3332 13.3333C25.3332 16.152 22.7066 18.916 18.4879 19.7573C17.4319 19.968 17.0199 21.2973 17.8279 22.0587C18.3466 22.5467 18.6666 23.2347 18.6666 24V28C18.6666 28.3536 18.807 28.6928 19.0571 28.9428C19.3071 29.1929 19.6463 29.3333 19.9999 29.3333C20.3535 29.3333 20.6927 29.1929 20.9427 28.9428C21.1928 28.6928 21.3332 28.3536 21.3332 28V24C21.3332 23.24 21.1732 22.5173 20.8879 21.8627C24.9106 20.4667 27.9999 17.324 27.9999 13.3333C27.9999 11.5373 27.3546 9.88667 26.2839 8.504C26.5639 7.41067 26.5386 6.30933 26.4319 5.464C26.3372 4.70667 26.2052 3.71467 25.6719 3.12267C24.8786 2.244 23.5652 2.76133 22.6319 3.08C21.6307 3.41878 20.6781 3.88721 19.7986 4.47333C18.5573 4.15655 17.281 3.99752 15.9999 4C14.6746 4 13.3959 4.16667 12.1986 4.47467C11.319 3.88853 10.3665 3.4201 9.36523 3.08133C8.4319 2.76133 7.11723 2.244 6.3239 3.12267C5.7799 3.72533 5.66657 4.63866 5.56923 5.41466L5.56257 5.46533C5.4559 6.312 5.4319 7.41467 5.7119 8.50933C4.64523 9.89067 3.9999 11.5387 3.9999 13.3333C3.9999 17.3227 7.08923 20.4667 11.1119 21.8627C10.8207 22.5284 10.6692 23.2467 10.6666 23.9733L10.4426 24.0187C9.48657 24.1507 8.87457 24.032 8.45857 23.856C7.44523 23.4267 6.92257 22.3453 6.28523 21.5187C5.8879 21.0053 5.30923 20.364 4.42123 20.068C4.25507 20.0127 4.07963 19.9906 3.90494 20.0031C3.73025 20.0156 3.55972 20.0623 3.4031 20.1407C3.08679 20.299 2.84631 20.5764 2.73457 20.912C2.62282 21.2476 2.64896 21.6138 2.80725 21.9301C2.96553 22.2464 3.24298 22.4869 3.57857 22.5987C4.32257 22.8467 4.83723 24.1213 5.30923 24.6867C5.80657 25.284 6.4679 25.908 7.4159 26.3107C8.32523 26.6973 9.39323 26.8347 10.6666 26.6787V28C10.6666 28.3536 10.807 28.6928 11.0571 28.9428C11.3071 29.1929 11.6463 29.3333 11.9999 29.3333C12.3535 29.3333 12.6927 29.1929 12.9427 28.9428C13.1928 28.6928 13.3332 28.3536 13.3332 28V24C13.3332 23.2347 13.6532 22.5467 14.1719 22.0587C14.9812 21.296 14.5679 19.968 13.5119 19.7573C9.2919 18.916 6.66657 16.152 6.66657 13.3333C6.66657 12.056 7.1799 10.8253 8.1439 9.75467C8.52123 9.336 8.6199 8.74667 8.4199 8.23467Z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
