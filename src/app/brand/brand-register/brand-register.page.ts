import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BrandService } from '../brand.service';

@Component({
    selector: 'app-brand-register',
    templateUrl: 'brand-register.page.html',
    styleUrls: ['brand-register.page.scss']
})

export class BrandRegisterPage implements OnInit {

    croppedImagepath = "";
    isLoading = false;

    imagePickerOptions = {
        maximumImagesCount: 1,
        quality: 50
    };

    form = new FormGroup({
        description: new FormControl(null, [Validators.required]),
        image: new FormControl(null, [Validators.required])
    })

    constructor(
        private camera: Camera,
        public actionSheetController: ActionSheetController,
        private brandService: BrandService,
        public toastController: ToastController,
        private sanitizer: DomSanitizer,
        private loader: LoadingController
    ) { }

    ngOnInit() { }

    pickImage(sourceType) {
        const options: CameraOptions = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData: string) => {
            this.form.patchValue({ image: 'data:image/jpeg;base64,' + imageData });
        }, (err) => {
            console.log('Deu ruim');
        });
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: "Selecionar imagem",
            buttons: [{
                text: 'Procurar na Galeria',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Usar Câmera',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancelar',
                role: 'cancelar'
            }
            ]
        });
        await actionSheet.present();
    }

    save() {
        this.loader.create();
        this.form.patchValue({image: 'https://mambo.vteximg.com.br/arquivos/ids/234273/154647_Cerveja-Eisenbahn-Pilsen-Long-Neck-355ml.jpg?v=636728641723000000'});
        this.brandService.postBrand(this.form.value)
            .subscribe(() => {
                this.loader.dismiss();
                this.presentToast('Salvo com sucesso!');
            });
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    getImgContent(img): SafeUrl {
        if (img) {
            return this.sanitizer.bypassSecurityTrustUrl(img);
        } else {
            return '../../../assets/images/beer_default.jpg';
        }
    }
}