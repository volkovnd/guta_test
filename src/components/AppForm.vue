<template>
    <section id="form">
        <div class="form">
            <form action="/">
                <h2>Подпишитесь на рассылку</h2>
                <div class="form-row">
                    <div class="form-item">
                        <label for="form-name">
                            Имя
                        </label>
                        <input type="text" placeholder="Ваше имя" name="name" id="form-name" />
                    </div>
                    <div class="form-item">
                        <label for="form-email">
                            E-Mail
                        </label>
                        <input type="text" placeholder="example@mail.com" name="name" id="form-email" />
                    </div>
                </div>
                <div class="form-item">
                    <label for="form-comment">
                        Комментарий
                    </label>
                    <textarea id="form-comment" name="comment" placeholder="Комментарий" rows="5"></textarea>
                </div>
                <button type="submit">Подписаться</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
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
        width: calc(78px * 2);
        height: calc(78px * 2);
        position: absolute;
        top: -78px;
        left: -78px;
        transform: rotateZ(45deg);
        transform-origin: center;
        display: block;
        content: "";
        background: #14A5DA1F 0% 0% no-repeat padding-box;
    }

    &:after {
        position: absolute;
        content: "";
        display: block;
        width: 50px;
        height: 50px;
        background-image: url("~images/RSS.svg");
        background-size: 21px 21px;
        background-position: center;
        background-repeat: no-repeat;
        left: 0;
        top: 0;
    }
}

form {
    display: block;
    width: 100%;
    max-width: 600px;
    flex: 0 0 600px;
    text-align: center;
}

h2 {
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 25px;
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    .form-item {
        width: 100%;
        max-width: 50%;
        flex: 0 0 50%;
        text-align: left;
    }
}

.form-item {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;

    label {
        display: block;
        padding-left: 21px;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 5px;
        text-align: left;
    }

    input, textarea {
        width: 100%;
        border: 1px solid #14A5DA;
        border-radius: 4px;
        line-height: 18px;
        padding: 10px 20px;
        color: #000000;

        &:focus {
            background-color: #14A5DA1F;
        }

        &::placeholder {
            font-size: 14px;
            line-height: 18px;
            color: rgba(0,0,0,0.73);
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
}
</style>
