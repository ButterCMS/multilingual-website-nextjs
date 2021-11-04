import { useTranslations } from "next-intl";
import butterCMSClient from "../libs/buttercms";

export default function Page({ fields }) {
  const t = useTranslations("ssg");

  return (
    <div>
      <h2>From next-intl</h2>
      <h1>{t("heading")}</h1>
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
    "ssg-page",
    {
      locale,
    }
  );
  const { fields } = data.data;

  return {
    props: {
      messages: {
        ...require(`../messages/ssg/${locale}.json`),
        ...require(`../messages/navbar/${locale}.json`),
      },
      fields,
    },
  };
};
