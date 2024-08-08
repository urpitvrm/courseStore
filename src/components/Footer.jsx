import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer text-neutral-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 cursor-pointer">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c-5.468 0-9.837 4.37-9.837 9.837 0 4.347 2.825 8.065 6.74 9.383.494.091.674-.214.674-.476 0-.235-.009-.857-.014-1.68-2.742.596-3.321-1.322-3.321-1.322-.45-1.145-1.099-1.451-1.099-1.451-.899-.614.069-.601.069-.601 0.993.069 1.514 1.021 1.514 1.021.883 1.514 2.316 1.077 2.88.824.091-.639.345-1.077.63-1.325-2.188-.248-4.487-1.094-4.487-4.877 0-1.076.384-1.954 1.014-2.643-.101-.249-.439-1.246.096-2.594 0 0 .827-.265 2.71 1.011a9.41 9.41 0 012.468-.332c.839.004 1.684.113 2.472.331 1.88-1.275 2.705-1.011 2.705-1.011.538 1.348.2 2.345.099 2.594.631.688 1.013 1.566 1.013 2.643 0 3.792-2.305 4.625-4.499 4.868.354.306.675.916.675 1.846 0 1.333-.012 2.408-.012 2.736 0 .263.178.57.678.473 3.911-1.322 6.733-5.041 6.733-9.384 0-5.468-4.37-9.837-9.837-9.837z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M16 8a6 6 0 100 12 6 6 0 000-12zm-2.196 9.672v-5.344l4.615 2.672-4.615 2.672zM24 3.848v16.303A3.848 3.848 0 0120.152 24H3.848A3.848 3.848 0 010 20.152V3.848A3.848 3.848 0 013.848 0h16.303A3.848 3.848 0 0124 3.848zM20.152 2H3.848C2.25 2 1 3.25 1 4.848v14.304C1 20.75 2.25 22 3.848 22h16.303C21.75 22 23 20.75 23 19.152V4.848C23 3.25 21.75 2 20.152 2z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.723v20.554C0 23.226.792 24 1.77 24h20.459C23.208 24 24 23.226 24 22.277V1.723C24 .774 23.208 0 22.23 0zM7.12 20.452H3.72V9.047h3.399v11.405zM5.419 7.701c-1.092 0-1.979-.896-1.979-1.998 0-1.103.887-1.999 1.979-1.999 1.092 0 1.979.896 1.979 1.999 0 1.102-.887 1.998-1.979 1.998zM20.452 20.452h-3.4v-5.604c0-1.336-.025-3.057-1.865-3.057-1.865 0-2.151 1.458-2.151 2.964v5.697h-3.399V9.047h3.26v1.555h.045c.454-.859 1.564-1.763 3.217-1.763 3.44 0 4.076 2.264 4.076 5.208v6.405z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
