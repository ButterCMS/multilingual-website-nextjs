import { useTranslations } from "next-intl";
import butterCMSClient from "../libs/buttercms";

export default function Home({ fields }) {
  const t = useTranslations("index");

  return (
    <div>
      <h2>From next-intl</h2>
      <h3>{t("heading")}</h3>
      <p>{t("content")}</p>

      <h2>From ButterCMS</h2>
      <h3>{fields.name}</h3>
      <p>{fields.content}</p>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await butterCMSClient.page.retrieve(
    "build_a_multilingual_website_with_buttercms",
    "home-page",
    {
      locale,
    }
  );
  const { fields } = data.data;

  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`),
        ...require(`../messages/navbar/${locale}.json`),
      },
      fields,
    },
  };
};
