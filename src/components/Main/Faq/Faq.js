import React from "react";
import s from './Faq.module.css';

const Faq = () => {
    return (
        <div className={s.textContent}>
            <h2>Pricing FAQ</h2>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    How does the 14-day free trial work?
                </div>
                <div className={s.questionContent}>
                    It’s simple. After you have registered in Pics.io, you are automatically given a
                    14-day
                    free trial period. No credit card or any other personal information is required to
                    get
                    access to the free trial period.<br/><br/>During this time you have unlimited access
                    to
                    all Pics.io features and you can fully explore its capabilities. After this period
                    is
                    over, you can pick a convenient billing plan.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    What if we need a little more time than 14 days to test Pics.io?
                </div>
                <div className={s.questionContent}>
                    No problem. If you feel that you need some more time to evaluate Pics.io before you
                    can
                    decide which billing plan to choose, just let us know. Contact us at <a
                    href="#">support@pics.io</a>, and we’ll be happy to extend your
                    trial period.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Do you offer refunds?
                </div>
                <div className={s.questionContent}>
                    According to our <a href="#" target="_blank">Terms of
                    Service</a>, we can offer refunds within 15 days after the original purchase.
                    However,
                    this doesn’t apply to discounted plans. All payments made with discounts are
                    non-refundable.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Which methods of payment do you accept?
                </div>
                <div className={s.questionContent}>
                    We accept Visa, MasterCard, Discover, American Express, and many more. Credit card
                    is
                    our preferred mode of payment, but we can also accept bank transfers for amounts
                    exceeding $500. In certain cases, we consider PayPal payments as well. Welcome to
                    contact <a href="#">support@pics.io</a> to find out more.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    What if I have, say, 15 people in my team? Micro plan stops at 10 teammates… Do I
                    have
                    to buy Small plan?
                </div>
                <div className={s.questionContent}>
                    No, you don’t. That will be an overkill, and we understand it too. In this and any
                    similar situation, when the number of people in your team slightly exceeds the limit
                    of
                    the billing plan, please drop us a line at <a
                    href="#">sales@pics.io</a> and tell us more about your team
                    requirements. We’ll offer you a favorable personal quote.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    How can I get a discount?
                </div>
                <div className={s.questionContent}>
                    We offer special conditions to non-profit organizations, educational institutions
                    and
                    students for our Small and Medium plans. If you are eligible for a discount, you’re
                    welcome to contact us at <a href="#">sales@pics.io</a> and we
                    will be
                    happy to discuss all the options.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Can I test Pics.io with my teammates during the trial period?
                </div>
                <div className={s.questionContent}>
                    Sure. You can invite your teammates to join your Pics.io trial account. In fact,
                    working
                    as a team, you can benefit much more from using Pics.io rather than working
                    individually.<br/><br/>You can go to Settings - My Team and click on “Invite new
                    teammate”
                    to invite your colleagues to your Pics.io digital library.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    What do credits mean in Pics.io? How can I use them?
                </div>
                <div className={s.questionContent}>
                    You can use credits to pay for AI autokeywording function or to pay for Pics.io in
                    advance. Your payment will be taken from credits first and then from your credit
                    card.
                    What’s more, Pics.io has promo codes that add to your credit balance.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Can I change my billing plan?
                </div>
                <div className={s.questionContent}>
                    Sure you can. You can easily move between Pics.io plans any time you want, and the
                    new
                    pricing will be adjusted automatically.<br/><br/>If you choose to upgrade to a more
                    expensive billing plan during the ongoing payment period, the unused portion of the
                    prepaid subscription fee will be applied to the new price of the more expensive
                    plan.<br/><br/>The same applies to Pay As You Go plan. If you change the number of
                    teammates or websites, the system will automatically update your invoice. It will
                    also take into account the number of days during which you used these features
                    during the month.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Who are teammates in Pics.io? Are these the people we share a website with?
                </div>
                <div className={s.questionContent}>
                    Not really. Teammates are people who share the same digital library with you and who
                    were invited to Pics.io via Settings - My Team option. The maximum number of
                    teammates
                    you can have in your Pics.io team at a time depends on your billing plan.<br/><br/>As
                    for
                    websites, you can share them with any number of external stakeholders - Pics.io
                    doesn’t
                    charge you for that. The number of websites you can have at a time is, however,
                    limited
                    by your billing plan.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    I'm from a non-profit organization. May we get a discount?
                </div>
                <div className={s.questionContent}>
                    Absolutely! We will be happy to offer you special conditions for our Small and
                    Medium
                    plans. Just contact us at <a href="#">sales@pics.io</a> to learn
                    more.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    How can I unsubscribe from Pics.io?
                </div>
                <div className={s.questionContent}>
                    You can cancel your subscription in Pics.io at any time through your account page
                    (Settings - Billing). This action will block access to Pics.io for you and for all
                    other
                    teammates you have previously invited to your team. Please note that no refunds are
                    available for any unused period of the prepaid subscription.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    Where can I learn more detailed information about different billing plans in
                    Pics.io?
                </div>
                <div className={s.questionContent}>
                    You can read more detailed information about each of the
                    <a href="#" target="_blank"
                       rel="noopener">
                        available billing plans here
                    </a>.
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    What is the difference between Pay As You Go and Free plans?
                </div>
                <div className={s.questionContent}>
                    Free plan is an introductory plan with limited functionality and basic features. Pay
                    As
                    You Go is a paid plan coming with active teammates and/or websites
                </div>
            </div>

            <div className={s.question}>
                <div className={s.questionTitle}>
                    What if our company wants a customized plan?
                </div>
                <div className={s.questionContent}>
                    If your team requires a customized number of teammates/websites/inboxes or would
                    like to
                    discuss pricing terms for branding and/or autogeneration of keywords, please
                    contact <a href="#">sales@pics.io</a>. Our sales team will help to construct
                    the individual plan following your requirements.
                </div>
            </div>

        </div>
    )
}

export default Faq;
