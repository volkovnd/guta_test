<template>
    <div class="footer-subscribe">
        <div class="footer-title">
            Подписка на новости
        </div>
        <form action="/" @submit="checkForm">
            <input type="text" v-model="email" name="subscribe-email" placeholder="example@mail.com">
            <button type="submit">Ok</button>
        </form>
    </div>
</template>

<script>
import { validEmail } from "./utils";

export default {
    data() {
        return {
            email: null,
            emailError: false
        };
    },
    methods: {
        checkForm(e) {
            e.preventDefault();

            if (!this.email) {
                this.emailError = "Не указан e-mail!";
            } else if (!this.validEmail(this.email)) {
                this.emailError = "Не верный формат e-mail!";
            } else {
                this.emailError = false;
            }

            if (this.emailError) {
                alert(this.emailError);
            }
        },
        validEmail
    }
}
</script>

<style lang="scss" scoped>
.footer-subscribe {
    width: 100%;
    max-width: calc(289px + 30px);
    flex: 0 0 calc(289px + 30px);

    form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;


        input[type="text"] {
            border-radius: 2px;
            background-color: #F7F7F7;
            font-size: 12px;
            line-height: 16px;
            border: none;
            padding: 7px 15px;
            color: #000000;
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            display: block;

            &::placeholder {
                font-size: 12px;
                line-height: 15px;
                color: #BBBBBB;
            }
        }

        button[type="submit"] {
            border-radius: 2px;
            background-color: #14A5DA;
            padding: 6px 25px;
            font-size: 14px;
            line-height: 18px;
            border: none;
            color: white;
            flex: 0 0 auto;
            width: auto;
            margin-left: 11px;
            display: block;
        }
    }
}

.footer-title {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
}
</style>
