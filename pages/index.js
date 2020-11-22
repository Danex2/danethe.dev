import Layout from "@/components/layout";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <h1 className="text-3xl font-bold md:text-5xl">Dane Miller</h1>
        <p className="mb-5 text-sm font-semibold md:text-xl">
          Fullstack Developer
        </p>
        <div className="flex mb-10 space-x-3">
          <a
            href="https://github.com/Danex2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 duration-150 rounded hover:bg-gray-200"
          >
            {" "}
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.017 20.004c.005.122-.008.242-.034.364a2.17 2.17 0 01-.257.647c-.353.593-.953.988-1.726.988-1.82 0-2.534-.893-3.428-3.129C3.966 17.36 3.68 17.003 3 17.003v-2c1.82 0 2.534.893 3.428 3.128.606 1.515.892 1.872 1.572 1.872 0-.29-.004-.547-.012-.895-.02-.816-.022-.983.013-1.2.015-.477.138-.815.384-1.15-2.232-.486-3.737-1.49-4.601-3.117l-.324-.76C3.145 11.973 3 10.946 3 9.76c0-1.365.416-2.586 1.194-3.606-.243-.97-.21-2.156.326-3.494l.175-.438.45-.143c.06-.02.132-.037.218-.05.874-.138 2.117.19 3.743 1.23a13.265 13.265 0 012.983-.333c.908 0 1.81.091 2.673.272 1.581-.99 2.79-1.301 3.64-1.17.085.014.158.031.217.05l.452.143.175.44c.469 1.177.549 2.261.379 3.21C20.518 6.945 21 8.264 21 9.762c0 1.263-.09 2.212-.35 3.136l-.275.754c-.719 1.625-2.303 2.64-4.748 3.123.255.352.373.709.373 1.228v1l-.001 1a.312.312 0 00.008.064L16 22.003c-.852 0-1.485-.416-1.797-1.07a2.069 2.069 0 01-.203-.944v-1.986c0-.084-.003-.089-.207-.293-.546-.546-.793-.958-.793-1.707v-.905l.9-.09c2.68-.27 4.136-1.013 4.62-2.1l.226-.617c.18-.646.254-1.432.254-2.53 0-1.165-.407-2.129-1.177-2.898L17.4 6.44l.173-.573c.153-.509.19-1.111.027-1.798a3.672 3.672 0 00-.084.022c-.535.15-1.204.47-2.01 1.008l-.367.245-.429-.106a10.964 10.964 0 00-2.621-.311c-1.001 0-1.99.127-2.905.376l-.446.122-.381-.261c-.833-.57-1.526-.91-2.08-1.068a3.71 3.71 0 00-.114-.03c-.193.795-.117 1.448.08 1.938l.234.588-.43.464C5.36 7.796 5 8.695 5 9.762c0 .977.114 1.786.324 2.396l.262.62c.654 1.227 2.043 1.965 4.52 2.23l.894.096v.899c0 .75-.247 1.161-.793 1.707-.204.204-.207.21-.207.293l-.017.185c-.012.06-.012.217.004.872.007.3.011.539.013.788a.792.792 0 01.017.156z"
                fill="#000"
              />
            </svg>
          </a>

          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="p-1 duration-150 rounded hover:bg-gray-200"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 7h2v5c0 2.47.189 3 1 3 1.304 0 2-.617 2-3 0-5.29-2.654-8-8-8a8 8 0 104.692 14.48l1.173 1.62A10 10 0 1112 2c6.46 0 10 3.616 10 10 0 3.545-1.642 5-4 5-1.344 0-2.114-.433-2.536-1.395A5 5 0 1115 8V7zm0 5a3 3 0 11-6 0 3 3 0 016 0z"
                fill="#000"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/dmiller94/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-1 duration-150 rounded hover:bg-gray-200"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h16V4H4zm9 5c-.518 0-1.065.158-1.548.452L11 9h-1v7h2v-4c0-.576.594-1 1-1h1c.406 0 1 .424 1 1v4h2v-4c0-1.853-1.606-3-3-3h-1zM8 8a1 1 0 100-2 1 1 0 000 2zM7 9v7h2V9H7z"
                fill="#000"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/hybridearth"
            rel="noopener noreferrer"
            target="_blank"
            className="p-1 duration-150 rounded hover:bg-gray-200"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.12 4.508l1.414.165-.636 1.275-.931 1.865a1.475 1.475 0 01-.197.397c-.04.063-.177.262-.183.272a2.089 2.089 0 00-.082.131v2.389c0 6.111-5.915 9.995-11.501 9.995-1.143 0-2.012-.054-3.006-.271-1.637-.357-2.855-1.067-3.412-2.308l-.574-1.277 1.395-.129c1.261-.116 2.355-.356 3.195-.678-2.306-.37-3.598-1.383-3.598-3.285v-1h1c.22 0 .417-.018.595-.05C2.868 10.963 2 9.303 2 7.001v-.204c-.007-1.16.055-1.78.373-2.571.204-.508.498-.977.894-1.407L4.023 2l.733.838c2.418 2.764 4.808 4.44 7.248 4.643.01-2.55 1.938-4.48 4.5-4.48 1.195 0 2.279.454 3.13 1.272.467.096.962.174 1.485.235zm-2.211 1.654l-.307-.07-.212-.232c-.512-.561-1.154-.858-1.886-.858-1.463 0-2.5 1.042-2.5 2.5 0 .238-.006.387-.036.584-.118.785-.558 1.416-1.464 1.416-2.998 0-5.703-1.607-8.34-4.35-.136.414-.168.838-.164 1.635l.001.215c0 2.048.83 3.168 2.794 3.792l.698.222v.731c0 .887-.84 1.722-2.07 2.096.563.428 1.716.659 3.58.659h1v1c0 1.432-1.645 2.554-4.132 3.14.81.248 1.89.355 3.133.355 4.614 0 9.5-3.208 9.5-7.995v-2.5c0-.294.086-.55.227-.814.055-.104.116-.203.191-.316.015-.02.067-.098.109-.16l.08-.158.384-.77c-.2-.038-.395-.079-.586-.122z"
                fill="#000"
              />
            </svg>
          </a>
        </div>
        <p className="w-full px-3 text-sm text-center md:text-lg md:w-1/2 opacity-70">
          From the great white north. I enjoy building cool applications using
          the latest web technologies.
        </p>
      </Container>
    </Layout>
  );
}
