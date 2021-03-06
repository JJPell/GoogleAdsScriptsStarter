interface TotalEntities {
  campaigns: number;
  adGroups: number;
  ads: number;
  keywords: number;
}

/**
 * Logs the totals number of campaign, ad group, ads and keyword entities
 */
function logTotalEntities(account: GoogleAdsScripts.AdsApp.Account, totalEntities: TotalEntities): void {
  const accountName = account.getName();

  Logger.log(`${accountName}: Total Campaigns - ${totalEntities.campaigns}`);
  Logger.log(`${accountName}: Total Ad Groups - ${totalEntities.adGroups}`);
  Logger.log(`${accountName}: Total Ads - ${totalEntities.ads}`);
  Logger.log(`${accountName}: Total Keywords - ${totalEntities.keywords}`);
}

/**
 * Runs concurrently for each account under your MCC account
 */
function main(): void {
  const account = AdsApp.currentAccount();
  const campaigns = AdsApp.campaigns().get().totalNumEntities();
  const adGroups = AdsApp.adGroups().get().totalNumEntities();
  const ads = AdsApp.ads().get().totalNumEntities();
  const keywords = AdsApp.keywords().get().totalNumEntities();

  const totalEntities: TotalEntities = {
    campaigns,
    adGroups,
    ads,
    keywords
  };

  logTotalEntities(account, totalEntities);
}

// Assigning to global creates a global function within the Google Ads Scripts enviroment
global.main = main;
