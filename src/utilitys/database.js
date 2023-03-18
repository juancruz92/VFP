import { createClient } from "@supabase/supabase-js";
import { shuffle } from "../utilitys/utilitys.js";

const supabase = createClient(
  "https://zzatcqhxrrwizwqdyjru.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YXRjcWh4cnJ3aXp3cWR5anJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0NDIyNzcsImV4cCI6MTk4NTAxODI3N30.K-1e7LLXJZtuwhEjt5Uk8N9YjV924W4D-Rq2ldx8wc4"
);

async function getAllContent() {
  return Promise.all([supabase.from("issues").select("id,name, playlist"), supabase.from("parties").select("id,name,primary_color,regions,logo_url"), supabase.from("policies").select("party,issue,text")])
    .then(([{ data: issues }, { data: parties }, { data: policies }]) => {
      let allContent = {};

      console.log("executing getAllContent()")

      issues.forEach((issue) => {
        allContent[issue.id] = {
          issue_key: issue.id,
          issue_name: issue.name,
          playlist: issue.playlist,
          checked: false,
          parties: parties.map((party) => ({
            party_key: party.id,
            party_name: party.name,
            party_primary_color: party.primary_color,
            party_regions: party.regions,
            party_url: party.logo_url,
            policies: policies
              .filter((policy) => policy.issue === issue.id && policy.party === party.id)
              .map((policy) => {
                // if policy.text === "" dont return it
                if (policy.text === "") {
                  return;
                }
                return policy.text;
              })
              .filter((el) => el !== undefined),
          })),
        };
      });

      for (const issue in allContent) {
        allContent[issue].parties = shuffle(allContent[issue].parties);
        allContent[issue].parties = allContent[issue].parties.map((el, index) => {
          return { ...el, party_number: index + 1 };
        });
      }
      return allContent;
    })
    .catch((error) => {
      console.log(error, "error");
    });
}

export { getAllContent };
