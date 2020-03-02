<template>
    <section id="form">
        <div class="form">
            <form v-if="!formChecked" action="/" @submit="checkForm">
                <h2>Подпишитесь на рассылку</h2>
                <div class="form-row">
                    <div v-if="!errorName"  class="form-item">
                        <label for="form-name">
                            Имя
                        </label>
                        <input type="text" placeholder="Ваше имя" v-model="name" name="name" id="form-name"/>
                    </div>
                    <div v-else class="form-item">
                        <span class="form-error">{{ errorName }}</span>
                        <input class="error" type="text" placeholder="Ваше имя" v-model="name" name="name" id="form-name"/>
                    </div>
                    <div v-if="!errorEmail" class="form-item">
                        <label for="form-email">
                            E-Mail
                        </label>
                        <input type="text" placeholder="example@mail.com" v-model="email" name="email" id="form-email" />
                    </div>
                    <div v-else class="form-item">
                        <span class="form-error">{{ errorEmail }}</span>
                        <input class="error" type="text" placeholder="example@mail.com" v-model="email" name="email" id="form-email" />
                    </div>
                </div>
                <div v-if="!errorComment" class="form-item">
                    <label for="form-comment">Комментарий</label>
                    <textarea id="form-comment" v-model="comment" placeholder="Комментарий" rows="5"></textarea>
                </div>
                <div v-else class="form-item">
                    <span class="form-error">{{ errorComment }}</span>
                    <textarea class="error" id="form-comment" v-model="comment" placeholder="Комментарий" rows="5"></textarea>
                </div>
                <button type="submit">Подписаться</button>
            </form>
            <div v-else class="form-success">
                <div class="form-success-icon"></div>
                <span class="form-success-message">Уважаемый, {{ name }}, спасибо за подписку!</span>
            </div>
        </div>
    </section>
</template>

<script>
import { validEmail } from "./utils";

export default {
    data() {
        return {
            name: null,
            email: null,
            comment: null,
            errorName: false,
            errorEmail: false,
            errorComment: false,
            formChecked: false
        };
    },
    methods: {
        checkForm(e) {
            e.preventDefault();

            if (!this.name) {
                this.errorName = "Заполните поле";
            } else if (!this.validName(this.name)) {
                this.errorName = "Цифры в имени не допустимы";
            } else {
                this.errorName = false;
            }

            if (!this.email) {
                this.errorEmail = "Заполните поле";
            } else if (!this.validEmail(this.email)) {
                this.errorEmail = "Вы ввели некорректный e-mail";
            } else {
                this.errorEmail = false;
            }

            if (!this.comment) {
                this.errorComment = "Заполните поле";
            } else {
                this.errorComment = false;
            }

            this.formChecked = !this.errorName && !this.errorEmail && !this.errorComment;
        },
        validEmail,
        validName(name) {
            let re = /^[a-zA-Zа-яА-Я ]{1,}$/;

            return re.test(name);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~scss/global";

#form {
    @include make-container();

    margin-bottom: 60px;
}

.form {
    border: 1px solid #14A5DA;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &:before {
        position: absolute;
        transform: rotateZ(45deg);
        transform-origin: center;
        display: block;
        content: "";
        background: #14A5DA1F 0% 0% no-repeat padding-box;

        width: calc(48px * 2);
        height: calc(48px * 2);

        top: -48px;
        left: -48px;

        @media(min-width: 767px) {
            width: calc(78px * 2);
            height: calc(78px * 2);

            top: -78px;
            left: -78px;
        }
    }

    &:after {
        position: absolute;
        content: "";
        display: block;
        background-image: url("~images/RSS.svg");
        background-position: center;
        background-repeat: no-repeat;
        left: 0;
        top: 0;

        background-size: 12px 12px;

        width: 30px;
        height: 30px;

        @media(min-width: 767px) {
            background-size: 21px 21px;

            width: 50px;
            height: 50px;
        }
    }
}

form {
    display: block;
    width: 100%;
    text-align: center;

    max-width: 100%;
    flex: 0 0 100%;

    @media(min-width: 767px) {
        max-width: 600px;
        flex: 0 0 600px;
    }
}

h2 {
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 25px;

    font-size: 12px;
    line-height: 15px;

    @media(min-width: 767px) {
        font-size: 20px;
        line-height: 24px;
    }
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    .form-item {
        width: 100%;
        text-align: left;

        max-width: 100%;
        flex: 0 0 100%;

        @media(min-width: 767px){
            max-width: 50%;
            flex: 0 0 50%;
        }
    }
}

.form-item {
    padding-left: 0;
    padding-right: 0;

    margin-bottom: 15px;

    @media(min-width: 767px) {
        padding-left: 15px;
        padding-right: 15px;

        margin-bottom: 25px;
    }

    label, .form-error {
        display: block;
        padding-left: 21px;
        margin-bottom: 5px;
        text-align: left;

        font-size: 8px;
        line-height: 10px;

        @media(min-width: 767px) {
            font-size: 12px;
            line-height: 15px;
        }
    }

    .form-error {
        color: #E76400;
    }

    input, textarea {
        width: 100%;
        border: 1px solid #14A5DA;
        border-radius: 4px;
        padding: 10px 20px;
        color: #000000;

        font-size: 10px;
        line-height: 13px;

        @media(min-width: 767px) {
            font-size: 14px;
            line-height: 18px;
        }

        &.error {
            border-color: #E76400;
        }

        &:focus {
            background-color: #14A5DA1F;
        }

        &::placeholder {
            color: rgba(0,0,0,0.73);

            font-size: 10px;
            line-height: 12 px;

            @media(min-width: 767px) {
                font-size: 14px;
                line-height: 18px;
            }
        }
    }
}

button[type="submit"] {
    border-radius: 4px;
    border: none;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 10px 78px;
    background-color: #14A5DA;

    width: 100%;

    @media(min-width: 767px) {
        width: auto;
    }
}

.form-success-message {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    display: block;
    text-align: center;

    @media(min-width: 767px) {
        font-size: 20px;
        line-height: 24px;
    }
}

.form-success-icon {
    margin-bottom: 25px;
    width: 100%;
    background-image: url("~images/done.svg");
    background-repeat: no-repeat;
    background-position: center;

    background-size: 40px;

    height: 40px;

    @media(min-width: 767px) {
        background-size: 61px;
        height: 61px;
    }
}
</style>
