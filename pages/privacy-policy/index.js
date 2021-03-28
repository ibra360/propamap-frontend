import React from 'react'
import { Row, Col, Tabs } from 'antd';
import './TermsConditions.scss';
import Title from 'antd/lib/typography/Title';
import site from '../../core/config/sitemap';
import AppLayout from '../../layouts/AppLayout';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const policy = `<h1 style="text-align: center;"><strong>PRIVACY POLICY</strong></h1>
<p>Effective date: 05/18/2020</p>
<p><u><strong>Introduction</strong></u></p>
<p>Welcome to&nbsp;<strong>Propamap Inc.</strong>.</p>
<p>Propamap Inc.&nbsp;(&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates&nbsp;https://propamap.com and Propamap mobile application&nbsp;(hereinafter referred to as &ldquo;<strong>Service</strong>&rdquo;).</p>
<p>Our Privacy Policy governs your visit to&nbsp;https://propamap.com and Propamap mobile application, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
<p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
<p>Our Terms and Conditions (&ldquo;<strong>Terms</strong>&rdquo;) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (&ldquo;<strong>agreement</strong>&rdquo;).</p>
<p><u><strong>Definitions</strong></u></p>
<p><strong>SERVICE&nbsp;</strong>means the&nbsp;https://propamap.com website and Propamap mobile application&nbsp;operated by&nbsp;Propamap Inc..</p>
<p><strong>PERSONAL DATA</strong>&nbsp;means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
<p><strong>USAGE DATA</strong>&nbsp;is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
<p><strong>COOKIES</strong>&nbsp;are small files stored on your device (computer or mobile device).</p>
<p><strong>DATA CONTROLLER</strong>&nbsp;means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
<p><strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong>&nbsp;means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
<p><strong>DATA SUBJECT&nbsp;</strong>is any living individual who is the subject of Personal Data.</p>
<p><strong>THE USER&nbsp;</strong>is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>
<p><u><strong>Information Collection and Use</strong></u></p>
<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
<p><u><strong>Types of Data Collected</strong></u></p>
<p><strong>Personal Data</strong></p>
<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&ldquo;<strong>Personal Data</strong>&rdquo;). Personally identifiable information may include, but is not limited to:</p>
<p>Email address</p>
<p>First name and last name</p>
<p>Phone number</p>
<p>Address, State, Province, ZIP/Postal code, City</p>
<p>Cookies and Usage Data</p>
<p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us&nbsp;by following the unsubscribe link.</p>
<p><strong>Usage Data</strong></p>
<p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through a mobile device (&ldquo;<strong>Usage Data</strong>&rdquo;).</p>
<p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When you access Service with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>
<p><strong>Location Data</strong></p>
<p>We may use and store information about your location if you give us permission to do so (&ldquo;<strong>Location Data</strong>&rdquo;). We use this data to provide features of our Service, to improve and customize our Service.</p>
<p>You can enable or disable location services when you use our Service at any time by way of your device settings.</p>
<p><strong>Tracking Cookies Data</strong></p>
<p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
<p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
<p>Examples of Cookies we use:</p>
<p><strong>Session Cookies:</strong>&nbsp;We use Session Cookies to operate our Service.</p>
<p><strong>Preference Cookies:</strong>&nbsp;We use Preference Cookies to remember your preferences and various settings.</p>
<p><strong>Security Cookies:</strong>&nbsp;We use Security Cookies for security purposes.</p>
<p><strong>Advertising Cookies:</strong>&nbsp;Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</p>
<p><strong>Other Data</strong></p>
<p>While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, non-disclosure agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.</p>
<p><u><strong>Use of Data</strong></u></p>
<p>Propamap Inc.&nbsp;uses the collected data for various purposes:</p>
<p>to provide and maintain our Service;</p>
<p>to notify you about changes to our Service;</p>
<p>to allow you to participate in interactive features of our Service when you choose to do so;</p>
<p>to provide customer support;</p>
<p>to gather analysis or valuable information so that we can improve our Service;</p>
<p>to monitor the usage of our Service;</p>
<p>to detect, prevent and address technical issues;</p>
<p>to fulfill any other purpose for which you provide it;</p>
<p>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</p>
<p>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</p>
<p>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</p>
<p>in any other way we may describe when you provide the information;</p>
<p>for any other purpose with your consent.</p>
<p><u><strong>Retention of Data</strong></u></p>
<p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
<p><u><strong>Transfer of Data</strong></u></p>
<p>Your information, including Personal Data, may be transferred to &ndash; and maintained on &ndash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
<p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
<p>Propamap Inc.&nbsp;will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
<p><u><strong>Disclosure of Data</strong></u></p>
<p>We may disclose personal information that we collect, or you provide:</p>
<p><strong>Disclosure for Law Enforcement.</strong></p>
<p>Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
<p><strong>Business Transaction.</strong></p>
<p>If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</p>
<p><strong>Other cases. We may disclose your information also:</strong></p>
<p>to our subsidiaries and affiliates;</p>
<p>to contractors, service providers, and other third parties we use to support our business;</p>
<p>to fulfill the purpose for which you provide it;</p>
<p>for the purpose of including your company&rsquo;s logo on our website;</p>
<p>for any other purpose disclosed by us when you provide the information;</p>
<p>with your consent in any other cases;</p>
<p>if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</p>
<p><u><strong>Security of Data</strong></u></p>
<p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
<p><u><strong>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</strong></u></p>
<p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. &ndash; See more at https://eur-lex.europa.eu/eli/reg/2016/679/oj</p>
<p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
<p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at info@propamap.com.</p>
<p>In certain circumstances, you have the following data protection rights:</p>
<p>the right to access, update or to delete the information we have on you;</p>
<p>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</p>
<p>the right to object. You have the right to object to our processing of your Personal Data;</p>
<p>the right of restriction. You have the right to request that we restrict the processing of your personal information;</p>
<p>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</p>
<p>the right to withdraw consent.&nbsp;You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</p>
<p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
<p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>
<p><u><strong>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</strong></u></p>
<p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law&rsquo;s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy. &ndash; See more at: https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/</p>
<p>According to CalOPPA we agree to the following:</p>
<p>users can visit our site anonymously;</p>
<p>our Privacy Policy link includes the word &ldquo;Privacy&rdquo;, and can easily be found on the page specified above on the home page of our website;</p>
<p>users will be notified of any privacy policy changes on our Privacy Policy Page;</p>
<p>users are able to change their personal information by emailing us at info@propamap.com.</p>
<p>Our Policy on &ldquo;Do Not Track&rdquo; Signals:</p>
<p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
<p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>
<p><u><strong>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</strong></u></p>
<p>If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:</p>
<p><strong>What personal information we have about you</strong>. If you make this request, we will return to you:</p>
<p>The categories of personal information we have collected about you.</p>
<p>The categories of sources from which we collect your personal information.</p>
<p>The business or commercial purpose for collecting or selling your personal information.</p>
<p>The categories of third parties with whom we share personal information.</p>
<p>The specific pieces of personal information we have collected about you.</p>
<p>A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</p>
<p>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</p>
<p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12&nbsp;months.</p>
<p><strong>To delete your personal information</strong>. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.</p>
<p><strong>To stop selling your personal information</strong>. If you submit a request to stop selling your personal information, we will stop selling it. If you are a California resident, to opt-out of the sale of your personal information, click &ldquo;Do Not Sell My Personal Information&rdquo; at the bottom of our home page to submit your request.</p>
<p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.</p>
<p>To exercise your California data protection rights described above, please send your request(s) by one of the following means:</p>
<p>By email: info@propamap.com</p>
<p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.</p>
<p><u><strong>Service Providers</strong></u></p>
<p>We may employ third party companies and individuals to facilitate our Service (&ldquo;<strong>Service Providers</strong>&rdquo;), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
<p><u><strong>Analytics</strong></u></p>
<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
<p><strong>Google Analytics</strong></p>
<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>
<p>We also encourage you to review the Google's policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.</p>
<p><strong>Firebase</strong></p>
<p>Firebase is analytics service provided by Google Inc.</p>
<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: https://policies.google.com/privacy?hl=en</p>
<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>
<p><strong>Fathom Analytics</strong></p>
<p>Fathom Analytics is analytics service provided by Conva Ventures Inc. You can find their Privacy Policy here: https://usefathom.com/privacy/</p>
<p><strong>Piwik / Matomo</strong></p>
<p>Piwik or Matomo is a web analytics service. You can visit their Privacy Policy page here: https://matomo.org/privacy-policy</p>
<p><strong>Clicky</strong></p>
<p>Clicky is a web analytics service. Read the Privacy Policy for Clicky here: https://clicky.com/terms</p>
<p><strong>Cloudflare analytics</strong></p>
<p>Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: https://www.cloudflare.com/privacypolicy/</p>
<p><strong>Statcounter</strong></p>
<p>Statcounter is a web traffic analysis tool. You can read the Privacy Policy for Statcounter here: https://statcounter.com/about/legal/</p>
<p><strong>Flurry Analytics</strong></p>
<p>Flurry Analytics service is provided by Yahoo! Inc.</p>
<p>You can opt-out from Flurry Analytics service to prevent Flurry Analytics from using and sharing your information by visiting the Flurry's Opt-out page: https://dev.flurry.com/secure/optOut.do</p>
<p>For more information on the privacy practices and policies of Yahoo!, please visit their Privacy Policy page: https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm</p>
<p><strong>Mixpanel</strong></p>
<p>Mixpanel is provided by Mixpanel Inc.</p>
<p>You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: https://mixpanel.com/optout/</p>
<p>For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: https://mixpanel.com/terms/</p>
<p><strong>Unity Analytics</strong></p>
<p>Unity Analytics is provided by Unity Technologies.</p>
<p>For more information on what type of information Unity Analytics collects, please visit their Privacy Policy page: https://unity3d.com/legal/privacy-policy</p>
<p><u><strong>CI/CD tools</strong></u></p>
<p>We may use third-party Service Providers to automate the development process of our Service.</p>
<p><strong>GitHub</strong></p>
<p>GitHub is provided by GitHub, Inc.</p>
<p>GitHub is a development platform to host and review code, manage projects, and build software.</p>
<p>For more information on what data GitHub collects for what purpose and how the protection of the data is ensured, please visit GitHub Privacy Policy page:<u> </u><u><a href="https://help.github.com/en/articles/github-privacy-statement">https://help.github.com/en/articles/github-privacy-statement.</a></u></p>
<p><strong>GitLab CI/CD</strong></p>
<p>GitLab CI/CD is provided by GitLab, Inc.</p>
<p>GitLab CI (Continuous Integration) service is a part of GitLab that build and test the software whenever developer pushes code to application.</p>
<p>GitLab CD (Continuous Deployment) is a software service that places the changes of every code in the production which results in every day deployment of production.</p>
<p>For more information on what data GitLab CI/CD collects for what purpose and how the protection of the data is ensured, please visit GitLab CI/CD Privacy Policy page: https://about.gitlab.com/privacy/.</p>
<p><u><strong>Advertising</strong></u></p>
<p>We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.</p>
<p><strong>Google AdSense DoubleClick Cookie</strong></p>
<p>Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.</p>
<p>You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences/</p>
<p><strong>Bing Ads</strong></p>
<p>Bing Ads is an advertising service provided by Microsoft Inc.</p>
<p>You can opt-out from Bing Ads by following the instructions on Bing Ads Opt-out page: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</p>
<p>For more information about Bing Ads, please visit their Privacy Policy: https://privacy.microsoft.com/en-us/PrivacyStatement</p>
<p><strong>AdMob by Google</strong></p>
<p>AdMob by Google is provided by Google Inc.</p>
<p>You can opt-out from the AdMob by Google service by following the instructions described by Google: https://support.google.com/ads/answer/2662922?hl=en</p>
<p>For more information on how Google uses the collected information, please visit the &ldquo;How Google uses data when you use our partners' sites or app&rdquo; page: http://www.google.com/policies/privacy/partners/ or visit the Privacy Policy of Google: http://www.google.com/policies/privacy/</p>
<p><strong>AdButler</strong></p>
<p>AdButler is an advertising service provided by Sparklit Networks Inc.</p>
<p>For more information about AdButler, please visit their Privacy Policy: https://www.sparklit.com/agreements.spark?agreement=privacy</p>
<p><strong>Unity Ads</strong></p>
<p>Unity Ads is provided by Unity Technologies.</p>
<p>You can opt-out from Unity Ads service by following the instructions as described by Unity Technologies on their Privacy Policy page: https://unity3d.com/legal/privacy-policy</p>
<p>For more information about Unity Technologies, please visit Unity Technologies Privacy Policy: https://unity3d.com/legal/privacy-policy</p>
<p><u><strong>Behavioral Remarketing</strong></u></p>
<p>Propamap Inc.&nbsp;uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>
<p><strong>Google Ads (AdWords)</strong></p>
<p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>
<p>You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads</p>
<p>Google also recommends installing the Google Analytics Opt-out Browser Add-on &ndash; https://tools.google.com/dlpage/gaoptout &ndash; for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>
<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>
<p><strong>Bing Ads Remarketing</strong></p>
<p>Bing Ads remarketing service is provided by Microsoft Inc.</p>
<p>You can opt-out of Bing Ads interest-based ads by following their instructions: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</p>
<p>You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy Policy page: https://privacy.microsoft.com/en-us/PrivacyStatement</p>
<p><strong>Twitter</strong></p>
<p>Twitter remarketing service is provided by Twitter Inc.</p>
<p>You can opt-out from Twitter's interest-based ads by following their instructions: https://support.twitter.com/articles/20170405</p>
<p>You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: https://twitter.com/privacy</p>
<p><strong>Facebook</strong></p>
<p>Facebook remarketing service is provided by Facebook Inc.</p>
<p>You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950</p>
<p>To opt-out from Facebook's interest-based ads, follow these instructions from Facebook: https://www.facebook.com/help/568137493302217</p>
<p>Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.</p>
<p>For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: https://www.facebook.com/privacy/explanation</p>
<p><strong>Pinterest</strong></p>
<p>Pinterest remarketing service is provided by Pinterest Inc.</p>
<p>You can opt-out from Pinterest's interest-based ads by enabling the &ldquo;Do Not Track&rdquo; functionality of your web browser or by following Pinterest instructions: http://help.pinterest.com/en/articles/personalization-and-data</p>
<p>You can learn more about the privacy practices and policies of Pinterest by visiting their Privacy Policy page: https://about.pinterest.com/en/privacy-policy</p>
<p><u><strong>Payments</strong></u></p>
<p>We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
<p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
<p>The payment processors we work with are:</p>
<p><strong>PayPal or Braintree:</strong></p>
<p>Their Privacy Policy can be viewed at&nbsp;https://www.paypal.com/webapps/mpp/ua/privacy-full</p>
<p><strong>Apple Store In-App Payments:</strong></p>
<p>Their Privacy Policy can be viewed at: https://www.apple.com/legal/privacy/en-ww/ / https://support.apple.com/en-us/HT203027</p>
<p><strong>Google Play In-App Payments:</strong></p>
<p>Their Privacy Policy can be viewed at: https://policies.google.com/privacy?hl=en&amp;gl=us / https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&amp;ldt=privacynotice&amp;ldl=en</p>
<p><strong>Stripe:</strong></p>
<p>Their Privacy Policy can be viewed at: https://stripe.com/us/privacy</p>
<p><strong>2Checkout:</strong></p>
<p>Their Privacy Policy can be viewed at: https://www.2checkout.com/legal/privacy/</p>
<p><u><strong>Links to Other Sites</strong></u></p>
<p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<p><u><strong>Children's Privacy</strong></u></p>
<p>Our Services are not intended for use by children under the age of 13 (&ldquo;<strong>Children</strong>&rdquo;).</p>
<p>We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>
<p><u><strong>Changes to This Privacy Policy</strong></u></p>
<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<p><u><strong>Contact Us</strong></u></p>
<p>If you have any questions about this Privacy Policy, please contact us:</p>
<p>By email: info@propamap.com.</p>`

const Privacy = (props) => {

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {/* <div className="terms">
            <Title level={4}>Privacy Policy</Title>

            <div className="list">
              <div className="list-item">
                <div className="serial">1.</div>
                <div className="content">
                  <div className="heading">Privacy Introduction</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="serial">2.</div>
                <div className="content">
                  <div className="heading">Privacy Introduction</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus deleniti debitis dolore dignissimos dolorum possimus adipisci, ullam aliquam amet magnam repudiandae, cupiditate autem, a saepe vero quas eaque quaerat...
                        <span className="more">Learn More</span>
                  </div>
                </div>
              </div>
            </div>

          </div> */}
          <div dangerouslySetInnerHTML={{__html:policy}} />
        </Col>

      </Row >

    </div >
  )
}

Privacy.getLayout = page => {
  return <AppLayout route={site.routes.Privacy}>{page}</AppLayout>;
};


export default Privacy
