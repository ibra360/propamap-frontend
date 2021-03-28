import React from 'react'
import { Row, Col, Tabs } from 'antd';
import './TermsConditions.scss';
import Title from 'antd/lib/typography/Title';
import AppLayout from '../../layouts/AppLayout';
import site from '../../core/config/sitemap';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const innerHTML = `<p style="text-align: center;"><strong>TERMS OF SERVICE</strong></p>
<p>Last updated:&nbsp;05/18/2020</p>
<p><u><strong>Introduction</strong></u></p>
<p>Welcome to&nbsp;<strong>Propamap Inc.</strong>&nbsp;(&ldquo;<strong>Company</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;)! As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20&nbsp;minutes.</p>
<p>These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;, &ldquo;<strong>Terms of Service</strong>&rdquo;) govern your use of&nbsp;our web pages located at https://propamap.com and our mobile application&nbsp;Propamap (together or individually &ldquo;<strong>Service</strong>&rdquo;)&nbsp;operated by&nbsp;Propamap Inc..</p>
<p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here https://propamap.com/privacy.</p>
<p>Your agreement with us includes these Terms&nbsp;and our Privacy Policy&nbsp;(&ldquo;<strong>Agreements</strong>&rdquo;). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>
<p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at info@propamap.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
<p>Thank you for being responsible.</p>
<p><u><strong>Communications</strong></u></p>
<p>By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at.</p>
<p><u><strong>Purchases</strong></u></p>
<p>If you wish to purchase any product or service made available through Service (&ldquo;<strong>Purchase</strong>&rdquo;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
<p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
<p>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties&nbsp;subject to our Privacy Policy.</p>
<p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
<p>We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
<p><u><strong>Contests, Sweepstakes and Promotions</strong></u></p>
<p>Any contests, sweepstakes or other promotions (collectively, &ldquo;<strong>Promotions</strong>&rdquo;) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules&nbsp;as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
<p><u><strong>Subscriptions</strong></u></p>
<p>Some parts of Service are billed on a subscription basis (&ldquo;<strong>Subscription(s)</strong>&rdquo;). You will be billed in advance on a recurring and periodic basis (&ldquo;<strong>Billing Cycle</strong>&rdquo;). Billing cycles are set&nbsp;either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p>
<p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or&nbsp;Propamap Inc.&nbsp;cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting&nbsp;Propamap Inc.&nbsp;customer support team.</p>
<p>A valid payment method, including&nbsp;credit card or PayPal, is required to process the payment for your subscription. You shall provide&nbsp;Propamap Inc.&nbsp;with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize&nbsp;Propamap Inc.&nbsp;to charge all Subscription fees incurred through your account to any such payment instruments.</p>
<p>Should automatic billing fail to occur for any reason,&nbsp;Propamap Inc.&nbsp;will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p>
<p><u><strong>Free Trial</strong></u></p>
<p>Propamap Inc.&nbsp;may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (&ldquo;<strong>Free Trial</strong>&rdquo;).</p>
<p>You may be required to enter your billing information in order to sign up for Free Trial.</p>
<p>If you do enter your billing information when signing up for Free Trial, you will not be charged by&nbsp;Propamap Inc.&nbsp;until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.</p>
<p>At any time and without notice,&nbsp;Propamap Inc.&nbsp;reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.</p>
<p><u><strong>Fee Changes</strong></u></p>
<p>Propamap Inc., in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p>
<p>Propamap Inc.&nbsp;will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p>
<p>Your continued use of Service after Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>
<p><u><strong>Refunds</strong></u></p>
<p>Except when required by law, paid Subscription fees are non-refundable. If the subscriber wishes to cancel the subscription due to any reason, refund requests must be filed within 2 days from the day of the subscription.</p>
<p><u><strong>Content</strong></u></p>
<p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&ldquo;<strong>Content</strong>&rdquo;). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.</p>
<p>By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
<p>You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.</p>
<p>Propamap Inc.&nbsp;has the right but not the obligation to monitor and edit all Content provided by users.</p>
<p>In addition, Content found on or through this Service are the property of&nbsp;Propamap Inc.&nbsp;or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
<p><a name="_Ref535534524"></a> <u><strong>Prohibited Uses</strong></u></p>
<p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
<p>In any way that violates any applicable national or international law or regulation.</p>
<p>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</p>
<p>To transmit, or procure the sending of, any advertising or promotional material, including any &ldquo;junk mail&rdquo;, &ldquo;chain letter,&rdquo; &ldquo;spam,&rdquo; or any other similar solicitation.</p>
<p>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</p>
<p>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</p>
<p>To engage in any other conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</p>
<p>Additionally, you agree not to:</p>
<p>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party&rsquo;s use of Service, including their ability to engage in real time activities through Service.</p>
<p>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</p>
<p>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</p>
<p>Use any device, software, or routine that interferes with the proper working of Service.</p>
<p>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</p>
<p>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</p>
<p>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</p>
<p>Take any action that may damage or falsify Company rating.</p>
<p>Otherwise attempt to interfere with the proper working of Service.</p>
<p><u><strong>Analytics</strong></u></p>
<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
<p><strong>Google Analytics</strong></p>
<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
<p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en"><u>https://policies.google.com/privacy?hl=en</u></a></p>
<p>We also encourage you to review the Google's policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245"><u>https://support.google.com/analytics/answer/6004245</u></a>.</p>
<p><strong>Firebase</strong></p>
<p>Firebase is analytics service provided by Google Inc.</p>
<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy?hl=en"><u>https://policies.google.com/privacy?hl=en</u></a></p>
<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en"><u>https://policies.google.com/privacy?hl=en</u></a></p>
<p><strong>Fathom Analytics</strong></p>
<p>Fathom Analytics is analytics service provided by Conva Ventures Inc. You can find their Privacy Policy here: <a href="https://usefathom.com/privacy/"><u>https://usefathom.com/privacy/</u></a></p>
<p><strong>Piwik / Matomo</strong></p>
<p>Piwik or Matomo is a web analytics service. You can visit their Privacy Policy page here: <a href="https://matomo.org/privacy-policy"><u>https://matomo.org/privacy-policy</u></a></p>
<p><strong>Clicky</strong></p>
<p>Clicky is a web analytics service. Read the Privacy Policy for Clicky here:&nbsp;https://clicky.com/terms</p>
<p><strong>Cloudflare analytics</strong></p>
<p>Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: <a href="https://www.cloudflare.com/privacypolicy/"><u>https://www.cloudflare.com/privacypolicy/</u></a></p>
<p><strong>Statcounter</strong></p>
<p>Statcounter is a web traffic analysis tool. You can read the Privacy Policy for Statcounter here: <a href="https://statcounter.com/about/legal/"><u>https://statcounter.com/about/legal/</u></a></p>
<p><strong>Flurry Analytics</strong></p>
<p>Flurry Analytics service is provided by Yahoo! Inc.</p>
<p>You can opt-out from Flurry Analytics service to prevent Flurry Analytics from using and sharing your information by visiting the Flurry's Opt-out page: <a href="https://dev.flurry.com/secure/optOut.do"><u>https://dev.flurry.com/secure/optOut.do</u></a></p>
<p>For more information on the privacy practices and policies of Yahoo!, please visit their Privacy Policy page: <a href="https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm"><u>https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm</u></a></p>
<p><strong>Mixpanel</strong></p>
<p>Mixpanel is provided by Mixpanel Inc.</p>
<p>You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: <a href="https://mixpanel.com/optout/"><u>https://mixpanel.com/optout/</u></a></p>
<p>For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: <a href="https://mixpanel.com/terms/"><u>https://mixpanel.com/terms/</u></a></p>
<p><strong>Unity Analytics</strong></p>
<p>Unity Analytics is provided by Unity Technologies.</p>
<p>For more information on what type of information Unity Analytics collects, please visit their Privacy Policy page: <a href="https://unity3d.com/legal/privacy-policy"><u>hhttps://unity3d.com/legal/privacy-policy</u></a></p>
<p><a name="_Ref535534551"></a> <u><strong>No Use By Minors</strong></u></p>
<p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p>
<p><u><strong>Accounts</strong></u></p>
<p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p>
<p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
<p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>
<p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
<p><u><strong>Intellectual Property</strong></u></p>
<p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of&nbsp;Propamap Inc.&nbsp;and its licensors. Service is protected by copyright, trademark, and other laws of&nbsp;the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of&nbsp;Propamap Inc..</p>
<p><u><strong>Copyright Policy</strong></u></p>
<p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (&ldquo;<strong>Infringement</strong>&rdquo;) of any person or entity.</p>
<p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to&nbsp;dmca@propamap.com, with the subject line: &ldquo;Copyright Infringement&rdquo; and include in your claim a detailed description of the alleged Infringement as detailed below, under &ldquo;DMCA Notice and Procedure for Copyright Infringement Claims&rdquo;</p>
<p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
<p><u><strong>DMCA Notice and Procedure for Copyright Infringement Claims</strong></u></p>
<p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
<p>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;</p>
<p>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</p>
<p>identification of the URL or other specific location on Service where the material that you claim is infringing is located;</p>
<p>your address, telephone number, and email address;</p>
<p>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</p>
<p>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</p>
<p>You can contact our Copyright Agent via email at&nbsp;dmca@propamap.com</p>
<p><u><strong>Error Reporting and Feedback</strong></u></p>
<p>You may provide us&nbsp;either directly at info@propamap.com or via third party sites and tools&nbsp;with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (&ldquo;<strong>Feedback</strong>&rdquo;). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
<p>The third party sites and tools mentioned above include the following:</p>
<p><strong>Bugsnag</strong></p>
<p>Bugsnag is a platform for monitoring and logging stability of applications provided by Bugsnag Inc. Please read their Privacy Policy here: https://docs.bugsnag.com/legal/privacy-policy/</p>
<p><strong>ACRA</strong></p>
<p>ACRA or Application Crash Reports for Android is monitoring platform. Please find more information here: https://github.com/ACRA/acra</p>
<p><strong>Rollbar</strong></p>
<p>Rollbar is error tracking service provided by Rollbar Inc. Find out more here: https://docs.rollbar.com/docs/privacy-policy</p>
<p><strong>Sentry</strong></p>
<p>Sentry is open-source error tracking solution provided by Functional Software Inc. More information is available here: https://sentry.io/privacy/</p>
<p><strong>Raygun</strong></p>
<p>Raygun is automated error monitoring software provided by Raygun Limited. Privacy Policy is accessible at https://raygun.com/privacy/</p>
<p><strong>Firebase Crashlytics</strong></p>
<p>Firebase Crashlytics is bug reporting service provided by Google Inc.</p>
<p>You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: https://policies.google.com/privacy?hl=en</p>
<p>For more information on what type of information Firebase collects, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>
<p><u><strong>Links To Other Web Sites</strong></u></p>
<p>Our Service may contain links to third party web sites or services that are not owned or controlled by&nbsp;Propamap Inc..</p>
<p>Propamap Inc.&nbsp;has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
<p>YOU ACKNOWLEDGE AND AGREE THAT&nbsp;Propamap Inc.&nbsp;SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>
<p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
<p><a name="_Ref535534624"></a> <u><strong>Disclaimer Of Warranty </strong></u></p>
<p>THESE SERVICES ARE PROVIDED BY COMPANY ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
<p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
<p>COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
<p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
<p><a name="_Ref535534639"></a> <u><strong>Limitation Of Liability</strong></u></p>
<p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
<p><u><strong>Termination</strong></u></p>
<p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
<p>If you wish to terminate your account, you may simply discontinue using Service.</p>
<p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
<p><u><strong>Governing Law</strong></u></p>
<p><a name="_Hlk2089641"></a><a name="_Hlk2089622"></a><a name="_Hlk2098739"></a> These Terms shall be governed and construed in accordance with the laws of&nbsp;Malaysia&nbsp;without regard to its conflict of law provisions.</p>
<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p>
<p><u><strong>Changes To Service</strong></u></p>
<p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
<p><u><strong>Amendments To Terms</strong></u></p>
<p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
<p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
<p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>
<p><a name="_Ref535534689"></a> <u><strong>Waiver And Severability</strong></u></p>
<p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>
<p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p>
<p><a name="_Ref535534766"></a> <u><strong>Acknowledgement</strong></u></p>
<p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
<p><u><strong>Contact Us</strong></u></p>
<p>Please send your feedback, comments, requests for technical support:</p>
<p>By email: info@propamap.com.</p>`

const TermsConditions = (props) => {

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xl={24} >
          {/* <div className="terms">
            <Title level={4}>Terms &amp; Conditions</Title>

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
          <div dangerouslySetInnerHTML={{__html:innerHTML}} />
        </Col>

      </Row>

    </div>
  )
}

TermsConditions.getLayout = page => {
  return <AppLayout route={site.routes.Terms}>{page}</AppLayout>;
};

export default TermsConditions
